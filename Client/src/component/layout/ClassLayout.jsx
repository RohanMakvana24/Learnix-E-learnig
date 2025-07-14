import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const ClasstLayout = () => {
  return (
    <div className="h-screen w-full overflow-auto bg-white">
      <Navbar />
      <main className="pt-14 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClasstLayout;
