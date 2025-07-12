import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AuthLayout from "./component/layout/AuthLayout";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LandingPage from "./pages/static/LandingPage";
import OTPVerification from "./pages/auth/OTPVerification";
import ResetPassword from "./pages/auth/ResetPassword";
import ClasstLayout from "./component/layout/ClassLayout";
import HomePage from "./pages/home/HomePage";
import OneClassPage from "./pages/home/OneClassPage";
import EmailVerification from "./pages/auth/EmailVerification";
import Page404 from "./pages/error/Page404";
import IsCheckSignup from "./protected/auth/CheckSignup";
import { IsAuthenticated, IsLogin } from "./protected/auth/IsAuthenticated";
const App = () => {
  return (
    <>
      <Routes>
        {" "}
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <IsLogin>
              <LandingPage />
            </IsLogin>
          }
        ></Route>
        {/* Auth Routes  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="login"
            element={
              <IsLogin>
                <LoginPage />
              </IsLogin>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <IsLogin>
                <SignupPage />
              </IsLogin>
            }
          ></Route>
          <Route
            path="forgot-password"
            element={
              <IsLogin>
                {" "}
                <ForgotPassword />{" "}
              </IsLogin>
            }
          ></Route>
          <Route
            path="otp-verification"
            element={
              <IsLogin>
                {" "}
                <OTPVerification />{" "}
              </IsLogin>
            }
          ></Route>
          <Route
            path="reset-password"
            element={
              <IsLogin>
                <ResetPassword />
              </IsLogin>
            }
          ></Route>
          <Route
            path="email-verification"
            element={
              <IsCheckSignup>
                <EmailVerification />
              </IsCheckSignup>
            }
          ></Route>
        </Route>
        {/* Class Routes */}
        <Route path="/class" element={<ClasstLayout />}>
          <Route
            index
            element={
              <IsAuthenticated>
                <HomePage />
              </IsAuthenticated>
            }
          ></Route>
          <Route
            path="one-class"
            element={
              <IsAuthenticated>
                <OneClassPage />
              </IsAuthenticated>
            }
          ></Route>
        </Route>
        {/* Error Page Routes */}
        <Route path="*" element={<Page404 />}></Route>
        <Route path="/page404" element={<Page404 />}></Route>
      </Routes>
    </>
  );
};

export default App;
