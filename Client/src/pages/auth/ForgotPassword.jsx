import React from "react";
import {Helmet} from "react-helmet";
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {ForgotPasswordValidation} from "../../validations/auth/authValidation";
import {RiErrorWarningFill} from "react-icons/ri";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {ForgotPasswordAsyncThunk} from "../../features/redux/Auth/authSlice";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ~~ Formik To handle a ForgotPAssword Form ~~ //
    const forgotFormik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: ForgotPasswordValidation,
        onSubmit: async (values) => {
            const toastId = toast.loading("Sending reset link...");
            const result = await dispatch(ForgotPasswordAsyncThunk(values));
            if (ForgotPasswordAsyncThunk.fulfilled.match(result)) {
                toast.update(toastId, {
                    render: result.payload.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 3000
                })
                navigate("/auth/otp-verification");
            } else {
                toast.update(toastId, {
                    render: result.payload.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000
                })
            }

        }
    })

    return (
        <>
            <Helmet>
                <title>Learnix Password Recovery | Reset Your Password</title>
            </Helmet>
            <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f0f2f7]">
                {/* Left Panel - Form */}
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
                    <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
                        <div className="flex items-center mb-4 -mt-5">
                            <img src="/assets/img/logo/learnix.png" alt="Learnix Logo" className="w -40 h-20 -ml-2 object-contain"/>
                        </div>

                        <h1 className="text-2xl font-semibold mb-2">Forgot Password?</h1>
                        <p className="text-sm text-gray-500 mb-8">
                            Enter your registered email and we’ll send you password reset
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  instructions.
                        </p>

                        <form className="space-y-5"
                            onSubmit={
                                forgotFormik.handleSubmit
                        }>
                            <div>
                                <label htmlFor="email" className="text-xs font-medium mb-1 block">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input id="email" type="email" name="email"
                                        value={
                                            forgotFormik.values.email
                                        }
                                        onChange={
                                            forgotFormik.handleChange
                                        }
                                        onBlue={
                                            forgotFormik.handleBlur
                                        }
                                        placeholder="you@example.com"
                                        className={
                                            `w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                                                forgotFormik.errors.email && forgotFormik.touched.email ? "border border-red-700" : ""
                                            }`
                                        }/> {
                                    forgotFormik.errors.email && forgotFormik.touched.email ? (
                                        <div>
                                            <RiErrorWarningFill className="absolute text-red-700 right-3 top-5 -translate-y-1/2 "/>
                                            <div className="text-red-700 text-xs font-semibold">
                                                {
                                                forgotFormik.errors.email
                                            } </div>
                                        </div>
                                    ) : ("")
                                } </div>
                            </div>

                            <button type="submit" className="w-full bg-[#2f46f0] text-white py-2 text-sm font-semibold hover:bg-[#2439c0] transition">
                                Send Reset Link
                            </button>

                            <p className="text-sm text-gray-800 text-center mt-4">
                                Remember your password?{" "}
                                <Link to="/auth/login" className="text-[#2f46f0] font-semibold hover:underline">
                                    Log In
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
                        Reset Your Password Easily
                    </h2>
                    <p className="text-sm opacity-80 max-w-md mb-8 text-center md:text-left">
                        We'll email you instructions to securely reset your Learnix LMS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                account password.
                    </p>
                    <img src="/assets/img/auth/forgot-password.png" alt="Forgot Password Illustration" className="w-full max-w-md h-auto object-contain"/>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
