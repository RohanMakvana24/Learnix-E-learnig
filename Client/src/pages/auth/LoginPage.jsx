import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../validations/auth/authValidation";
import { RiErrorWarningFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { LoginFormAsyncThunk } from "../../features/redux/Auth/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      setIsLoading(true);
      const result = await dispatch(LoginFormAsyncThunk(values));
      const toastId = toast.loading("Logging in...");
      if (LoginFormAsyncThunk.fulfilled.match(result)) {
        setIsLoading(false);
        toast.update(toastId, {
          render: result.payload.message,
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
        navigate("/class");
      } else {
        setIsLoading(false);
        toast.update(toastId, {
          render: result.payload.message,
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
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
              {isLoading ? (
                <div role="status" className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50 100.591C22.3858 100.591 0 78.2051 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50.5908C0 22.9766 22.3858 0.59082 50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             0.59082C77.6142 0.59082 100 22.9766 100
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50.5908ZM9.08144 50.5908C9.08144 73.1895
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             27.4013 91.5094 50 91.5094C72.5987 91.5094
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             90.9186 73.1895 90.9186 50.5908C90.9186
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             27.9921 72.5987 9.67226 50 9.67226C27.4013
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             35.9116 97.0079 33.5539C95.2932 28.8227
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             92.871 24.3692 89.8167 20.348C85.8452
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             15.1192 80.8826 10.7238 75.2124 7.41289C69.5422
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             4.10194 63.2754 1.94025 56.7698 1.05124C51.7666
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             0.367541 46.6976 0.446843 41.7345 1.27873C39.2613
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             1.69328 37.813 4.19778 38.4501 6.62326C39.0873
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             9.04874 41.5694 10.4717 44.0505 10.1071C47.8511
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             9.54855 51.7191 9.52689 55.5402 10.0491C60.8642
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             10.7766 65.9928 12.5457 70.6331 15.2552C75.2735
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             17.9648 79.3347 21.5619 82.5849 25.841C84.9175
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             28.9121 86.7997 32.2913 88.1811 35.8758C89.083
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Log In"
              )}
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
