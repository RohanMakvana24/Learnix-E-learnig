import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
              <img
                src="/assets/img/logo/learnix.png"
                alt="Learnix Logo"
                className="w-40 h-20 -ml-2 object-contain"
              />
            </div>

            <h1 className="text-2xl font-semibold mb-2">Forgot Password?</h1>
            <p className="text-sm text-gray-500 mb-8">
              Enter your registered email and we’ll send you password reset
              instructions.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-medium mb-1 block"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2f46f0] text-white py-2 text-sm font-semibold hover:bg-[#2439c0] transition"
              >
                Send Reset Link
              </button>

              <p className="text-sm text-gray-800 text-center mt-4">
                Remember your password?{" "}
                <Link
                  to="/auth/login"
                  className="text-[#2f46f0] font-semibold hover:underline"
                >
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
          <img
            src="/assets/img/auth/forgot-password.png"
            alt="Forgot Password Illustration"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
