import { validationResult } from "express-validator";
import HTTP_Response from "../utils/HttpResponse.js";
import uploadToCloudinary from "../utils/CloudinaryUploader.js";
import UserModel from "../models/UserModel.js";
import sendMail from "../services/emailService/emailServies.js";
import EmailTemplte from "../templates/emailTemplate.js";
import { v4 as uuidv4 } from "uuid";
import { mongoose } from "mongoose";
import OTPTemplate from "../templates/otpTemplate.js";
import bcrypt from "bcryptjs";
import { oauth2Client } from "./../config/googleConfig.js";
import axios from "axios";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";
import BlackListedToken from "../models/BlackListedToken.js";

// ⬟ Signup User Controller  ⬟ //
export const SignupUser = async (req, res) => {
  try {
    // ~ Validation Errors ~
    const errros = validationResult(req);
    if (!errros.isEmpty()) {
      return res.status(400).json({
        error: errros.array(),
      });
    }

    const { fullname, email, password } = req.body;

    // ~ If check Email already exist
    const isEmail = await UserModel.findOne({ email: email });
    if (isEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already ragistered try another",
      });
    }

    // ~ Profile Uploading
    const fileDetails = await uploadToCloudinary(
      req.file.path,
      req.file.originalname
    );
    const verificationToken = uuidv4();
    const subject = "Verification of your account..";

    const htmlContent = EmailTemplte(email, verificationToken, fullname);

    sendMail(email, subject, htmlContent, verificationToken, res);

    // ~ Store Data
    const newUser = await UserModel.create({
      fullname: fullname,
      email: email,
      password: password,
      profile: {
        url: fileDetails.secure_url,
        public_id: fileDetails.public_id,
      },
      verificationToken: verificationToken,
    });
    const token = newUser.generateAuthToken();
    return res.status(200).json({
      success: true,
      message: "The User Ragistered Succefully",
      token: token,
      user: newUser,
      u_id: newUser._id,
    });
  } catch (error) {
    console.log(error);
    throw HTTP_Response(504, error.message);
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Signup Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟  User Verify Controller  ⬟ //
export const VerifyUser = async (req, res) => {
  try {
    const verificationToken = req.params.verificationToken;

    // ~ Validation
    if (!verificationToken) {
      return res.status(403).json({
        success: false,
        message: "Verification Token is required",
      });
    }
    const user = await UserModel.findOne({
      verificationToken: verificationToken,
    });

    if (!user) {
      return res.status(403).json({
        success: false,
        message:
          " Verification Issue: The provided email was not found or has already been verified.",
      });
    }

    await UserModel.findByIdAndUpdate(user._id, {
      verified: true,
      verificationToken: "",
    });

    var clientBaseURL = process.env.CLIENT_BASE_URL;

    res.render("emailVerified", { clientBaseURL: clientBaseURL });
    // res.status(200).json({
    //   success: true,
    //   message:
    //     "Email Verification Successful: Your email has been successfully verified. You can now access and enjoy our services. Thank you for confirming your email!",
    // });
  } catch (error) {
    res.status(504).json({
      succecc: false,
      message: error.message,
    });
  }
};

// ~~~~~~~~~~~~~~~~~~ ❖ Verify User Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟  Check Verified User Controller  ⬟ //
export const isVerifiedUser = async (req, res) => {
  try {
    const userId = req.params.u_id;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User id is required",
      });
    }

    const user = await UserModel.findById(userId);
    if (user.verified) {
      return res.status(200).json({
        success: true,
        message: "User Verified",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User Not Verified",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(504).json({
      succecc: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Check Verify User Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟ Delete User Controller  ⬟ //
export const deleteUser = async (req, res) => {
  try {
    const u_id = req.params.id;
    if (!u_id) {
      return res.status(400).json({
        success: false,
        message: "User id is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(u_id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid User ID format",
      });
    }

    const isuser = await UserModel.findById(u_id);
    if (isuser.profile.public_id) {
      const result = await cloudinary.v2.uploader.destroy(
        isuser.profile.public_id,
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }

    const isDeleteUser = await UserModel.findByIdAndDelete(u_id);
    if (isDeleteUser) {
      return res.status(200).json({
        success: true,
        message: "The User Deleted Succefully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "The Not User Deleted...",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(504).json({
      success: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Delete User Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟ Login User Controller  ⬟ //
export const LoginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({
        error: errors.array(),
      });
    }
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email are not ragistered , ragister now ",
      });
    }
    if (user.isGoogleLogin) {
      return res.status(400).json({
        success: false,
        message: "Already Login using the google login option...",
      });
    }
    if (!user.verified) {
      return res.status(400).json({
        success: false,
        message: "User are not verified",
      });
    }

    const isPassword = await user.isPasswordValid(password);
    if (!isPassword) {
      return res.status(400).json({
        sucess: false,
        message: "Login credintials invalid",
      });
    }
    const token = user.generateAuthToken();

    res.status(200).json({
      success: true,
      message: "User Login Succefully",
      data: {
        user: user,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(504).json({
      success: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Login User Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟ Forgot Password Controller  ⬟ //
export const ForgotPassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array(),
      });
    }

    const { email } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (user.isGoogleLogin == true) {
      return res.status(400).json({
        success: false,
        message: "Already Login using the google login option...",
      });
    }
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is incorrect",
      });
    }

    function generateOTP() {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }

    const otp = generateOTP();

    // ~ store otp ~ //
    await UserModel.findByIdAndUpdate(user._id, {
      otp: otp,
    });

    // ~ Sending Email ~ //
    const htmlContent = OTPTemplate(email, otp, user.fullname);
    const subject = "Forgot Password Verification";
    sendMail(email, subject, htmlContent);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email succefully",
      email: email,
    });
  } catch (error) {
    console.log(error);
    res.status(504).json({
      sucess: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Forgot Password Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟ OTP Verification Controller  ⬟ //
export const OTP_Verification = async (req, res) => {
  try {
    const { otp } = req.body;
    if (!otp) {
      return res.status(400).json({
        sucess: false,
        message: "OTP is required",
      });
    }

    if (otp.toString().length !== 6) {
      return res.status(400).json({
        sucess: false,
        message: "OTP length must be at least 6 digit",
      });
    }

    const user = await UserModel.findOne({ otp: otp });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "OTP is invalid",
      });
    }

    if (user) {
      await UserModel.findByIdAndUpdate(user._id, {
        otp: "",
      });
      return res.status(200).json({
        success: true,
        message: "OTP Verification Done",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(504).json({
      sucess: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ OTP Verification Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// ⬟ Reset Password Controller  ⬟ //
export const ResetPassword = async (req, res) => {
  try {
    const { password, email } = req.body;
    console.log(req.body);
    // ~~ Validation ~~
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }
    const errros = validationResult(req);
    if (!errros.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errros.array(),
      });
    }

    // ~~ Check Email ~~
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Sorrry Somenthing Went Wrong...",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const isUpdated = await UserModel.findByIdAndUpdate(user._id, {
      password: hashedPassword,
    });

    if (isUpdated) {
      return res.status(200).json({
        success: true,
        message: "Password reset succefully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(504).json({
      success: false,
      message: error.message,
    });
  }
};
// ~~~~~~~~~~~~~~~~~~ ❖ Reset Password Section End ❖ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

export const ResendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email is incorrect",
      });
    }

    function generateOTP() {
      return Math.floor(100000 + Math.random() * 900000).toString();
    }

    const otp = generateOTP();

    // ~ Update otp ~ //
    await UserModel.findByIdAndUpdate(user._id, {
      otp: otp,
    });
    // ~ Sending Email ~ //
    const htmlContent = OTPTemplate(email, otp, user.fullname);
    const subject = "Forgot Password Verification";
    sendMail(email, subject, htmlContent);

    return res.status(200).json({
      success: true,
      message: "OTP resent to your email succefully",
    });
  } catch (error) {
    console.log(error);
    res.status(504).json({
      success: false,
      message: error.message,
    });
  }
};

export const GoogleLogin = async (req, res) => {
  try {
    const { code } = req.query;
    const googleRes = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name, picture } = userRes.data;

    let user = await UserModel.findOne({ email: email });
    if (user && user.isGoogleLogin === false) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please log in using email and password.",
      });
    }

    if (!user) {
      user = await UserModel.create({
        fullname: name,
        isGoogleLogin: true,
        email: email,
        verified: true,
        profile: {
          url: picture,
          public_id: "",
        },
      });

      const token = user.generateAuthToken();
      return res.status(200).json({
        success: true,
        message: "User Login Successfull",
        user: user,
        token: token,
      });
    }
    if (user.isGoogleLogin) {
      const token = user.generateAuthToken();
      return res.status(200).json({
        success: true,
        message: "User Login Successfull",
        user: user,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(504).json({
      sucess: false,
      message: error.message,
    });
  }
};

// ~ Private Auth Controller 🚦💨 ~ //
export const PrivateAuth = async (req, res) => {
  const user = req.user;
  return res.status(200).json({
    success: true,
    message: "Authentication Succefull",
    isValid: true,
  });
};

// ~ Logout Controller 🚦💨 ~ //
export const Logout = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Token is required",
      });
    }

    const decoded = jwt.decoded(token);
    const expires = new Date(decoded.exp * 1000);
    await BlackListModel({
      token: token,
      expiresAt: expires,
    });
    return res.status(200).json({
      success: true,
      message: "Logout Successfull",
    });
  } catch (error) {
    return res.status(504).json({
      success: false,
      message: error.message,
    });
  }
};
