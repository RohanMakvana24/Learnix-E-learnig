import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AuthLayout from "./component/layout/AuthLayout";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LandingPage from "./pages/static/LandingPage";
import OTPVerification from "./pages/auth/OtpVerification";
import ResetPassword from "./pages/auth/ResetPassword";
import ClasstLayout from "./component/layout/ClassLayout";
import HomePage from "./pages/class/HomePage";
import OneClassPage from "./pages/class/OneClassPage";
import EmailVerification from "./pages/auth/EmailVerification";

const App = () => {
  return (
    <>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />}></Route>
        {/* Auth Routes  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="signup" element={<SignupPage />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route path="otp-verification" element={<OTPVerification />}></Route>
          <Route path="reset-password" element={<ResetPassword />}></Route>
          <Route
            path="email-verification"
            element={<EmailVerification />}
          ></Route>
        </Route>
        {/* Class Routes */}
        <Route path="/class" element={<ClasstLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="one-class" element={<OneClassPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
