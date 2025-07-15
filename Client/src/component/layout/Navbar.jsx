import React, { useState } from "react";
import {
  FaChevronDown,
  FaSun,
  FaDollarSign,
  FaShoppingCart,
  FaUserCircle,
  FaUserFriends,
  FaHome,
  FaBookOpen,
  FaTachometerAlt,
  FaFileAlt,
  FaBlog,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaLeaf,
  FaEthereum,
} from "react-icons/fa";

import { FaUserGraduate } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAsyncThunk } from "../../features/redux/Auth/authSlice";
import { toast } from "react-toastify";
import { NavLink, Link, useSearchParams, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [ProfileDropdown, setProfileDropdown] = useState(false);
  const dispatch = useDispatch();
  const ToggleProfileDropdown = () => {
    setProfileDropdown((prev) => !prev);
  };

  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  // ~` Handle Logout `~ //
  const handleLogout = async () => {
    const result = await dispatch(LogoutAsyncThunk());
    const toastId = toast.loading("Logging out...");
    if (LogoutAsyncThunk.fulfilled.match(result)) {
      toast.update(toastId, {
        render: result.payload.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      navigate("/");
    } else {
      toast.update(toastId, {
        render: result.payload.message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };
  const navLinks = [
    {
      label: "Home",
      icon: <FaHome />,
    },
    {
      label: "Courses",
      icon: <FaBookOpen />,
      children: ["All Courses", "Single Course", "Categories"],
    },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      children: ["Student", "Instructor", "Admin"],
    },
    {
      label: "Pages",
      icon: <FaFileAlt />,
      children: ["About", "Contact", "FAQ"],
    },
    {
      label: "Blog",
      icon: <FaBlog />,
      children: ["All Posts", "Single Post"],
    },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleDropdownToggle = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <nav className="fixed top-0 p-1 pb-2 left-0 right-0 z-50  bg-gradient-to-r from-[#2f2a7c] via-[#3f33d1] to-[#2f2a7c]">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 py-2 h-14 max-w-[1440px] mx-auto">
          {/* Center: Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/img/logo/learnix.png"
              alt="Logo"
              className="h-11 w-32 sm:h-12 sm:w-36 "
            />
          </div>
          {/* Left: Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}{" "}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden mt-2 sm:flex items-center space-x-6 text-[14px] font-medium text-black relative">
            {navLinks.map(({ label, icon, children }) => (
              <li key={label} className="relative cursor-pointer">
                {/* Menu Trigger with `peer` */}
                <div className="peer flex items-center text-base font-semibold text-white space-x-1 hover:text-[#FF4D6D]">
                  {icon}
                  <span>{label}</span>
                  {children ? (
                    <FaChevronDown className="text-xs mt-[1px]" />
                  ) : (
                    ""
                  )}
                </div>

                {/* Submenu */}
                {children && (
                  <ul
                    className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md p-2 
          opacity-0 invisible peer-hover:opacity-100 peer-hover:visible 
          hover:opacity-100 hover:visible transition-all duration-200 z-50"
                  >
                    {children.map((child, idx) => (
                      <li
                        key={idx}
                        className="py-1 px-2 hover:bg-gray-100 text-sm text-gray-700 hover:text-[#FF4D6D] rounded"
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right Icons */}
          {isLogin ? (
            <>
              <div className="hidden mt-2.5 sm:flex items-center space-x-4">
                {/* Sun Icon */}
                <button className="group flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full hover:bg-gray-100 hover:text-black transition">
                  <FaUserGraduate className="mr-2 text-white transition group-hover:text-black" />
                  Become Instructor
                </button>
                <FaSun className="text-[16px] text-white cursor-pointer " />
                {/* Cart Icon with Badge */}
                <div className="relative">
                  <FaShoppingCart className="text-[16px] text-white cursor-pointer" />
                  <div className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </div>
                </div>
                {/* Become Instructor Button - on left side of profile */}
                {/* Profile Section */}
                <div className="relative mt-2">
                  {/* Profile Image Button */}
                  <button
                    onClick={ToggleProfileDropdown}
                    className="focus:outline-none"
                  >
                    <img
                      src={user?.profile.url}
                      alt="Profile"
                      className="w-9 h-9 rounded-full object-cover cursor-pointer border border-gray-300"
                    />
                  </button>

                  {/* Profile Dropdown */}
                  {ProfileDropdown && (
                    <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="py-2 px-4 border-b text-sm text-gray-700">
                        Hi, {user?.fullname}
                      </div>
                      <ul className="py-1 text-sm text-gray-700">
                        <li>
                          <a
                            href="/profile"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          >
                            <FaUser />
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/settings"
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                          >
                            <FaCog />
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <button
                          className="flex items-center w-full gap-2 px-4 py-2 text-left hover:bg-gray-100 text-sm text-red-600"
                          onClick={handleLogout}
                        >
                          <FaSignOutAlt />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="hidden sm:flex mt-2.5  items-center space-x-4">
                {/* Sun Icon */}
                <FaSun className="text-[16px] text-white  cursor-pointer" />{" "}
                {/* Cart Icon with Badge */}
                <div className="relative">
                  <FaShoppingCart className="text-[16px] text-white cursor-pointer" />
                  <div className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </div>
                </div>
                <Link
                  to="/auth/login"
                  class="px-3  py-2 text-xs font-semibold text-center inline-flex items-center text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                >
                  <svg
                    class="w-4 h-4 mr-1 text-gray-900  dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  class="px-3  py-2 -ml-2 text-xs font-semibold text-center inline-flex items-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <svg
                    class="w-4 h-4 mr-1 text-white  dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Ragister
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Mobile Sidebar Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 w-72 h-full bg-black shadow-xl z-40 transform transition-transform duration-300 sm:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <img
              src="/assets/img/logo/learnix.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-400 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Profile Section */}
          {isLogin && (
            <>
              {" "}
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <img
                    src={user?.profile?.url}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-500"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      {user?.fullname}
                    </h4>
                    <p className="text-gray-400 text-xs">Student</p>
                  </div>
                </div>
                <button
                  title="Logout"
                  className="text-gray-400 hover:text-red-500 transition"
                  onClick={handleLogout} // implement this function
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}

          {/* Menu content */}
          {/* Menu content */}
          <div className="p-4 space-y-4 overflow-y-auto pb-6">
            <ul className="text-sm font-semibold text-gray-300 w-full space-y-1">
              {navLinks.map(({ label, icon, children }) => {
                const isOpen = openDropdown === label;

                return (
                  <li key={label}>
                    <div
                      onClick={() => handleDropdownToggle(label)}
                      className={`flex items-center justify-between w-full py-3 px-1 hover:bg-gray-800 cursor-pointer transition duration-150 ${
                        isOpen ? "bg-gray-800" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl text-gray-400">{icon}</span>
                        <span className="text-gray-200">{label}</span>
                      </div>

                      {children && (
                        <FaChevronDown
                          className={`text-sm text-gray-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    {isOpen && children && (
                      <ul className="ml-10 mt-1 space-y-1 text-gray-400">
                        {children.map((child, idx) => (
                          <li
                            key={idx}
                            className="py-1 hover:text-white cursor-pointer transition-colors"
                          >
                            {child}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              {/* Register and Login Buttons */}
              <li className="pt-4 space-y-2">
                {isLogin ? (
                  <>
                    <Link
                      to="/auth/signup"
                      className="px-3 py-2 text-xs font-semibold text-center inline-flex items-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-full justify-center"
                    >
                      <FaUserGraduate className="mr-2 text-white transition group-hover:text-black" />
                      Become A Instructor
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Register */}
                    <Link
                      to="/auth/signup"
                      className="px-3 py-2 text-xs font-semibold text-center inline-flex items-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 w-full justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Register
                    </Link>

                    {/* Login */}
                    <Link
                      to="/auth/login"
                      className="px-3 py-2 text-xs font-semibold text-center inline-flex items-center text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 w-full justify-center"
                    >
                      <svg
                        className="w-4 h-4 mr-1 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Login
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
