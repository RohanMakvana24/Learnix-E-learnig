import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#f0f2f7]">
        {<Outlet />}
      </div>
    </>
  );
};

export default AuthLayout;
