import { setIn } from "formik";
import React, { isValidElement, use, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FiMail } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteUserAsyncThunk,
  IsVerifyUserAsynThunk,
  PrivateAuthAsyncThunk,
} from "../../features/redux/Auth/authSlice";
import { toast } from "react-toastify";
const EmailVerification = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = new URLSearchParams(useLocation().search).get("email") ?? "";
  const user = useSelector((state) => state.auth.user);

  // `` Check If user verified or not `` //
  const storedTime = localStorage.getItem("countdownTime");
  const startTime = storedTime ? Number(storedTime) : 120;
  const [timeLeft, settimeLeft] = useState(startTime);

  // `` Check If User Verified `` //
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await dispatch(IsVerifyUserAsynThunk(user._id));
      if (IsVerifyUserAsynThunk.fulfilled.match(result)) {
        const response = await dispatch(PrivateAuthAsyncThunk());
        if (PrivateAuthAsyncThunk.fulfilled.match(response)) {
          navigate("/class");
          localStorage.removeItem("isSignup");
          localStorage.removeItem("countdownTime");
          toast.success(result.payload.message);
        } else {
          toast.error(response.payload.message);
          navigate("/auth/signup");
        }
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [user._id]);
  // `` Format Time `` //
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60); // Get minutes
    const seconds = time % 60; // Get seconds
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  useEffect(() => {
    if (timeLeft <= 0) {
      localStorage.removeItem("countdownTime");
      localStorage.removeItem("isSignup");
      handleDeleteUser();
      return;
    }
    const timerId = setInterval(() => {
      settimeLeft((prewTime) => {
        const newTime = prewTime - 1;
        localStorage.setItem("countdownTime", newTime);
        return newTime;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleDeleteUser = async () => {
    localStorage.removeItem("isSignup");
    navigate("/auth/signup");
    const result = await dispatch(deleteUserAsyncThunk(user._id));
    if (deleteUserAsyncThunk.fulfilled.match(result)) {
      localStorage.removeItem("isSignup");
      localStorage.removeItem("countdownTime");
      toast.success(result.payload.message);
    } else {
      navigate("/auth/signup");
      toast.error(result.payload.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Email Verification | Learnix</title>
      </Helmet>
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f0f2f7] font-sans">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-10 md:px-16">
          <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-start mb-6">
              <img
                src="/assets/img/logo/learnix.png"
                alt="Learnix Logo"
                className="w-30 h-8 object-contain"
              />
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-[#e9f0ff] text-[#2f46f0] rounded-full flex items-center justify-center mb-4 shadow">
                <FiMail className="text-2xl" />
              </div>

              <h1 className="text-xl font-bold mb-2 text-gray-800">
                Verify Your Email
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                We've sent a Activation link to
                <br></br>
                <span className="text-[#2f46f0] font-medium">{email}</span>
              </p>

              <div className="bg-gray-100 rounded-md px-4 py-3 text-sm text-gray-700 font-medium shadow-inner">
                You can request a new email in{" "}
                <span className="text-[#2f46f0] font-semibold">
                  {formatTime(timeLeft)}{" "}
                </span>
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://mail.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2f46f0] hover:bg-[#1d2ec4] text-white px-5 py-2 rounded-md text-sm font-medium shadow"
                >
                  Open Gmail
                </a>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 text-center mt-8">
            © 2025 Learnix LMS. •{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Right Panel - Illustration */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#3b90b1] to-[#356b86] text-white flex flex-col justify-center items-center px-6 md:px-16 py-10 md:py-0">
          <h2 className="text-2xl font-semibold max-w-md mb-4 leading-snug text-center md:text-left">
            Check Your Inbox
          </h2>
          <p className="text-sm opacity-90 max-w-md mb-8 text-center md:text-left">
            A confirmation link has been sent to your registered email. Click it
            to verify your identity and continue to Learnix LMS.
          </p>

          <img
            src="/assets/img/auth/email.png"
            alt="Email Verification"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
