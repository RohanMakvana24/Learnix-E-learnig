import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel.js";
import BlackListedToken from "../models/BlackListedToken.js";
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.headers.authorization ?. split(" ")[1];
        if (! token) {
            return res.status(400).json({suceess: false, message: "Access denied. No token provided.", isValid: false});
        }
        const blackListedToken = await BlackListedToken.findOne({token});
        if (blackListedToken) {
            return res.status(400).json({suceess: false, message: "Token is blacklisted.", isValid: false});
        }
        const decode = jwt.verify(token, process.env.JWTSECRETKEY);
        const user = await UserModel.findById(decode.id);
        if (! user) {
            return res.status(400).json({suceess: false, message: "Invalid or expired token.", isValid: false});
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({suceess: false, message: "Invalid or expired token.", isValid: false});
    }
};

export default isAuthenticated;
