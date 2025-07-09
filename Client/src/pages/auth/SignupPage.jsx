import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {Link, useNavigate} from "react-router-dom";
import {SignupValidation} from "../../validations/auth/authValidation";
import {useFormik} from "formik";
import {RiErrorWarningFill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {SignupAsynkThunk} from "../../features/redux/Auth/authSlice";
import {toast} from "react-toastify";
import {encryptBoolean} from "../../component/features/Hashing";
const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 🚦Formik To Handle Signup Form 🚦 //
    const SignupFormik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            profile: null,
            remember: false
        },
        validationSchema: SignupValidation,
        onSubmit: async (values) => {
            setisLoading(true);
            const formData = new FormData();
            for (const key in values) {
                formData.append(key, values[key]);
            }
            const toastId = toast.loading("Signing up...");
            const result = await dispatch(SignupAsynkThunk(formData));
            if (SignupAsynkThunk.fulfilled.match(result)) {
                toast.update(toastId, {
                    render: result.payload.message,
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true
                });
                setisLoading(false);
                const encryptSignup = encryptBoolean(true)
                localStorage.setItem("isSignup", encryptSignup);
                navigate(`/auth/email-verification?email=${
                    result.payload.user.email
                }`);
            } else {
                toast.update(toastId, {
                    render: result.payload.message || "Signup failed. ❌",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true
                });
                setisLoading(false);
            }
        }
    });
    return (
        <>
            <Helmet>
                <title>Join Learnix Today – Sign Up & Start Learning</title>
            </Helmet>
            {/* Left Panel - Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-between px-6 py-8 md:px-16 md:py-12">
                <div className="max-w-md mx-auto flex-1 flex flex-col justify-center">
                    <div className="flex items-center mb-2 -mt-5">
                        <img src="/assets/img/logo/learnix.png"
                            // replace this with your actual logo URL
                            alt="Sellora Logo"
                            className="w-40 h-20 -ml-2  object-contain"
                        />
                    </div>
                    <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
                    <p className="text-sm text-gray-500 mb-8">
                        Sign up to access your Learnix Learning Plateform
                    </p>
                    <form autoComplete="off" className="space-y-5"
                        onSubmit={
                            SignupFormik.handleSubmit
                    }>
                        <div className="relative">
                            <label htmlFor="fullname" className="text-xs font-medium mb-1 block">
                                Fullname
                            </label>
                            <input id="fullname" name="fullname" type="text"
                                value={
                                    SignupFormik.values.fullname
                                }
                                onChange={
                                    SignupFormik.handleChange
                                }
                                onBlur={
                                    SignupFormik.handleBlur
                                }
                                className={
                                    `w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                                        SignupFormik.errors.fullname && SignupFormik.touched.fullname ? "border-red-700" : ""
                                    }`
                                }/> {
                            SignupFormik.errors.fullname && SignupFormik.touched.fullname && (
                                <div>
                                    <RiErrorWarningFill className="absolute text-red-700 right-3 top-10  -translate-y-1/2 "/>
                                    <div className="text-red-700 text-xs font-semibold">
                                        {
                                        SignupFormik.errors.fullname
                                    }
                                        {" "} </div>
                                </div>
                            )
                        } </div>
                        <div className="relative">
                            <label htmlFor="email" className="text-xs font-medium mb-1 block">
                                Email
                            </label>
                            <input id="email" name="email"
                                value={
                                    SignupFormik.values.email
                                }
                                onChange={
                                    SignupFormik.handleChange
                                }
                                onBlur={
                                    SignupFormik.handleBlur
                                }
                                type="email"
                                autoComplete="off"
                                className={
                                    `w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                                        SignupFormik.errors.email && SignupFormik.touched.email ? "border-red-700" : "fulllname"
                                    }`
                                }/> {
                            SignupFormik.errors.email && SignupFormik.touched.email && (
                                <div>
                                    <RiErrorWarningFill className="absolute text-red-700 right-3 top-10  -translate-y-1/2 "/>
                                    <div className="text-red-700 text-xs font-semibold">
                                        {
                                        SignupFormik.errors.email
                                    }
                                        {" "} </div>
                                </div>
                            )
                        } </div>
                        <div>
                            <div className="relative">
                                <label htmlFor="password" className="text-xs font-medium mb-1 block">
                                    Password
                                </label>
                                <div className="relative">
                                    <input id="password" name="password"
                                        value={
                                            SignupFormik.values.password
                                        }
                                        onChange={
                                            SignupFormik.handleChange
                                        }
                                        onBlur={
                                            SignupFormik.handleBlur
                                        }
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        className={
                                            `w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                                                SignupFormik.errors.password && SignupFormik.touched.password ? "border-red-700" : "fulllname"
                                            }`
                                        }/> {
                                    SignupFormik.touched.password && SignupFormik.errors.password ? (
                                        <>
                                            <RiErrorWarningFill className="absolute right-3 top-1/2 col-auto
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    -translate-y-1/2 text-red-700"/>
                                        </>
                                    ) : (
                                        <>
                                            <button type="button"
                                                onClick={togglePassword}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                                {
                                                showPassword ? <FaEye/>: <FaEyeSlash/>
                                            } </button>
                                        </>
                                    )
                                } </div>
                                {
                                SignupFormik.errors.password && SignupFormik.touched.password && (
                                    <div>
                                        <RiErrorWarningFill className="absolute text-red-700 right-3 top-10  -translate-y-1/2 "/>
                                        <div className="text-red-700 text-xs font-semibold">
                                            {
                                            SignupFormik.errors.password
                                        }
                                            {" "} </div>
                                    </div>
                                )
                            } </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="profile" className="text-xs font-medium mb-1 block">
                                Profile
                            </label>
                            <input id="profile" name="profile" type="file"
                                onChange={
                                    (e) => {
                                        SignupFormik.setFieldValue("profile", e.currentTarget.files[0]);
                                    }
                                }
                                className={
                                    `w-full text-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f46f0] ${
                                        SignupFormik.errors.profile && SignupFormik.touched.profile ? "border-red-700" : "fulllname"
                                    }`
                                }/> {
                            SignupFormik.errors.profile && SignupFormik.touched.profile && (
                                <div>
                                    <RiErrorWarningFill className="absolute text-red-700 right-3 top-10  -translate-y-1/2 "/>

                                    <RiErrorWarningFill className="absolute text-red-700 right-3 top-10  -translate-y-1/2 "/>
                                    <div className="text-red-700 text-xs font-semibold">
                                        {
                                        SignupFormik.errors.profile
                                    }
                                        {" "} </div>
                                </div>
                            )
                        } </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" name="remember"
                                    value={
                                        SignupFormik.values.remember
                                    }
                                    onChange={
                                        SignupFormik.handleChange
                                    }
                                    className="w-3 h-3"/>
                                <span>Remember Me</span>
                            </label>
                        </div>
                        {
                        SignupFormik.errors.remember && SignupFormik.touched.remember && (
                            <div>
                                <div className="text-red-700 text-xs font-semibold -mt-4">
                                    {
                                    SignupFormik.errors.remember
                                }
                                    {" "} </div>
                            </div>
                        )
                    }
                        <button type="submit" className="w-full h-10 bg-[#2f46f0] text-white text-sm font-semibold flex items-center justify-center hover:bg-[#2439c0] transition rounded">
                            {
                            isLoading ? (
                                <div role="status" className="flex justify-center items-center">
                                    <svg aria-hidden="true" className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50 100.591C22.3858 100.591 0 78.2051 0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50.5908C0 22.9766 22.3858 0.59082 50
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             0.59082C77.6142 0.59082 100 22.9766 100
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             50.5908ZM9.08144 50.5908C9.08144 73.1895
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             27.4013 91.5094 50 91.5094C72.5987 91.5094
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             90.9186 73.1895 90.9186 50.5908C90.9186
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             27.9921 72.5987 9.67226 50 9.67226C27.4013
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <>Sign In</>
                            )
                        } </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-400 mb-3">Or Login With</p>
                        <button type="button" className="w-full flex items-center justify-center gap-3 px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               shadow-sm hover:shadow-md hover:border-gray-400 hover:text-gray-900
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               hover:bg-gradient-to-r hover:from-white hover:via-gray-50 hover:to-white
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               transition-all duration-300 ease-in-out transform hover:-translate-y-[1px] active:scale-95">
                            <FcGoogle className="w-5 h-5"/>
                            <span>Continue with Google</span>
                        </button>
                        <p className="text-sm text-gray-800 mt-6">
                            Already have an account?{" "}
                            <Link to="/auth/login" className="text-[#2f46f0] font-semibold hover:underline">
                                Login
                            </Link>
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

                <img src="/assets/img/auth/login.png" alt="CRM Dashboard" className="w-full max-w-md h-auto object-contain"/>
            </div>
        </>
    );
};

export default SignupPage;
