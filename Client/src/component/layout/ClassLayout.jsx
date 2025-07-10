import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const ClasstLayout = () => {
  return (
    <div className="h-screen w-full overflow-auto bg-white">
      <Navbar />
      <main className="pt-19 w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClasstLayout;
