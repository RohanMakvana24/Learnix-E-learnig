import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/auth/authValidation";
import { RiErrorWarningFill } from "react-icons/ri";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  // 🚏 Login Form Handle Using The Formik 🚏 //
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Helmet>
        <title>Welcome Back! Login | Learnix</title>
      </Helmet>
      {/* Left Panel - Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
        <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
          <div className="flex items-center mb-2 -mt-5">
            <img
              src="/assets/img/logo/learnix.png" // replace this with your actual logo URL
              alt="Sellora Logo"
              className="w-40 h-20 -ml-2  object-contain"
            />
          </div>

          <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
          <p className="text-sm text-gray-500 mb-8">
            Enter your email and password to access your account.
          </p>

          <form className="space-y-5" onSubmit={loginFormik.handleSubmit}>
            <div>
              <label htmlFor="email" className="text-xs font-medium mb-1 block">
                Email
              </label>
              <div className="relative w-full">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  className={`w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                    loginFormik.errors.email && loginFormik.touched.email
                      ? "border border-red-700"
                      : ""
                  }`}
                />
                {loginFormik.errors.email && loginFormik.touched.email ? (
                  <div>
                    <RiErrorWarningFill className="absolute text-red-700 right-3 top-5 -translate-y-1/2 " />
                    <div className="text-red-700 text-xs font-semibold">
                      {loginFormik.errors.email}{" "}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-xs font-medium mb-1 block"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  className={`w-full text-sm border px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                    loginFormik.errors.password && loginFormik.touched.password
                      ? "border-red-700"
                      : "border-gray-300"
                  }`}
                />
                {loginFormik.touched.password && loginFormik.errors.password ? (
                  <>
                    <RiErrorWarningFill
                      className="absolute right-3 top-1/2 col-auto
                    -translate-y-1/2 text-red-700"
                    />
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </>
                )}
              </div>

              {loginFormik.errors.password && loginFormik.touched.password && (
                <div className="text-red-700 text-xs font-semibold">
                  {loginFormik.errors.password}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="flex items-center space-x-2">
                <input
                  name="remember"
                  value={loginFormik.values.remember}
                  onChange={loginFormik.handleChange}
                  onBlur={loginFormik.handleBlur}
                  type="checkbox"
                  className="w-3 h-3"
                />
                <span>Remember Me</span>
              </label>
              <Link
                to="/auth/forgot-password"
                className="text-[#2f46f0] hover:underline"
              >
                Forgot Your Password?
              </Link>
            </div>
            {loginFormik.errors.remember && loginFormik.touched.remember && (
              <div className="text-red-700 -mt-5 text-xs font-semibold">
                {loginFormik.errors.remember}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#2f46f0] text-white py-2 text-sm font-semibold hover:bg-[#2439c0] transition"
            >
              Log In
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-400 mb-3">Or Login With</p>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md
               shadow-sm hover:shadow-md hover:border-gray-400 hover:text-gray-900
               hover:bg-gradient-to-r hover:from-white hover:via-gray-50 hover:to-white
               transition-all duration-300 ease-in-out transform hover:-translate-y-[1px] active:scale-95"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>
            <p className="text-sm text-gray-800 mt-6">
              Don't have an account?{" "}
              <NavLink
                to="/auth/signup"
                className="text-[#2f46f0] font-semibold hover:underline"
              >
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>

        <div className="text-[10px] text-gray-400 text-center mt-6 mb-2">
          © 2025 Learnix LMS. •{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Right Panel - Image + Info */}
      <div className="w-full md:w-1/2 bg-[#2f46f0] text-white flex flex-col justify-center items-center px-6 md:px-16 py-10 md:py-0">
        <h2 className="text-xl md:text-2xl font-medium max-w-md mb-4 leading-snug text-center md:text-left">
          Empower Your Learning Journey with Learnix
        </h2>
        <p className="text-sm opacity-80 max-w-md mb-8 text-center md:text-left">
          Log in to access curated study materials, interactive lessons, and
          exclusive resources to accelerate your learning. All in one place.
        </p>

        <img
          src="/assets/img/auth/login.png"
          alt="CRM Dashboard"
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
    </>
  );
};

export default LoginPage;
