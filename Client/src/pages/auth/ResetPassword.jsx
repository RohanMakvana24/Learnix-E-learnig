import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Helmet} from "react-helmet";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirm = () => setShowConfirm(!showConfirm);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your password reset API call logic here
        console.log("Password updated");
    };

    return (
        <>
            <Helmet>
                <title>Set New Password | Learnix</title>
            </Helmet>
            <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f0f2f7]">
                {/* Left Panel - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
                    <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
                        <div className="flex items-center mb-4 -mt-5">
                            <img src="/assets/img/logo/learnix.png" alt="Learnix Logo" className="w-40 h-20 -ml-2 object-contain"/>
                        </div>

                        <h1 className="text-2xl font-semibold mb-2">Reset Password</h1>
                        <p className="text-sm text-gray-500 mb-8">
                            Set your new password to regain access to your Learnix LMS
                                          account.
                        </p>

                        <form className="space-y-5"
                            onSubmit={handleSubmit}>
                            <div>
                                <label className="text-xs font-medium mb-1 block">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input type={
                                            showPassword ? "text" : "password"
                                        }
                                        required
                                        placeholder="Enter new password"
                                        className="w-full text-sm border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2f46f0]"/>
                                    <div onClick={togglePassword}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
                                        {
                                        showPassword ? <FaEyeSlash/>: <FaEye/>
                                    } </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium mb-1 block">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input type={
                                            showConfirm ? "text" : "password"
                                        }
                                        required
                                        placeholder="Confirm new password"
                                        className="w-full text-sm border border-gray-300 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2f46f0]"/>
                                    <div onClick={toggleConfirm}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
                                        {
                                        showConfirm ? <FaEyeSlash/>: <FaEye/>
                                    } </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-[#2f46f0] text-white py-2 text-sm font-semibold hover:bg-[#2439c0] transition">
                                Reset Password
                            </button>

                            <p className="text-sm text-gray-800 text-center mt-4">
                                Back to{" "}
                                <Link to="/auth/login" className="text-[#2f46f0] font-semibold hover:underline">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>

                    <div className="text-[10px] text-gray-400 text-center mt-6 mb-2">
                        © 2025 Learnix LMS. •{" "}
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                {/* Right Panel - Illustration */}
                <div className="w-full md:w-1/2 bg-[#2f46f0] text-white flex flex-col justify-center items-center px-6 md:px-16 py-10 md:py-0">
                    <h2 className="text-xl md:text-2xl font-medium max-w-md mb-4 leading-snug text-center md:text-left">
                        Set a Strong Password
                    </h2>
                    <p className="text-sm opacity-80 max-w-md mb-8 text-center md:text-left">
                        Make sure your new password is different from previous passwords.
                    </p>

                    <img src="/assets/img/auth/reset.png" alt="Reset Password Illustration" className="w-full max-w-md h-auto object-contain"/>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
