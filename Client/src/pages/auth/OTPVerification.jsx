import React, {useRef, useState} from "react";
import {Helmet} from "react-helmet";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {OTPVerificationAsyncThunk} from "../../features/redux/Auth/authSlice";
import {toast} from "react-toastify";

const OTPVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (element, index) => {
        if (isNaN(element.value)) {
            return;
        }
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input
        if (element.value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        const toastId = toast.loading("Verifying OTP...");
        const result = await dispatch(OTPVerificationAsyncThunk({otp: enteredOtp}));
        if (OTPVerificationAsyncThunk.fulfilled.match(result)) {
            toast.update(toastId, {
                render: result.payload.message,
                type: "success",
                isLoading: false,
                autoClose: 3000
            });
            navigate("/auth/reset-password");
        } else {
            toast.update(toastId, {
                render: result.payload.message,
                type: "error",
                isLoading: false,
                autoClose: 3000
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>One-Time Password (OTP) Verification | Learnix</title>
            </Helmet>
            <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f0f2f7]">
                {/* Left Panel - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
                    <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
                        <div className="flex items-center mb-4 -mt-5">
                            <img src="/assets/img/logo/learnix.png" alt="Learnix Logo" className="w-40 h-20 -ml-2 object-contain"/>
                        </div>

                        <h1 className="text-2xl font-semibold mb-2">Enter OTP</h1>
                        <p className="text-sm text-gray-500 mb-8">
                            Enter the 6-digit code we sent to your email.
                        </p>

                        <form onSubmit={handleSubmit}
                            className="space-y-6">
                            <div className="flex justify-between space-x-2">
                                {
                                otp.map((digit, index) => (
                                    <input key={index}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={
                                            (e) => handleChange(e.target, index)
                                        }
                                        onKeyDown={
                                            (e) => handleBackspace(e, index)
                                        }
                                        ref={
                                            (el) => (inputRefs.current[index] = el)
                                        }
                                        className="w-10 h-12 text-center border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-[#2f46f0]"/>
                                ))
                            } </div>

                            <button type="submit" className="w-full bg-[#2f46f0] text-white py-2 text-sm font-semibold hover:bg-[#2439c0] transition">
                                Verify OTP
                            </button>

                            <p className="text-sm text-gray-800 text-center mt-4">
                                Didn't receive the code?{" "}
                                <button type="button" className="text-[#2f46f0] font-semibold hover:underline"
                                    onClick={
                                        () => alert("Resend logic here")
                                }>
                                    Resend
                                </button>
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
                <div className="w-full md:w-1/2 bg-[#3b90b1] text-white flex flex-col justify-center items-center px-6 md:px-16 py-10 md:py-0">
                    <h2 className="text-xl md:text-2xl font-semibold max-w-md mb-4 leading-snug text-center md:text-left">
                        Verify Your Identity
                    </h2>
                    <p className="text-sm opacity-80 max-w-md mb-8 text-center md:text-left">
                        We’ve sent a 6-digit code to your registered email address.
                    </p>

                    <img src="/assets/img/auth/otp-verify.png" alt="OTP Verification Illustration" className="w-full max-w-md h-auto object-contain"/>
                </div>
            </div>
        </>
    );
};

export default OTPVerification;
