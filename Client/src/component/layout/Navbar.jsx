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
} from "react-icons/fa";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { LogoutAsyncThunk } from "../../features/redux/Auth/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [ProfileDropdown, setProfileDropdown] = useState(false);
  const dispatch = useDispatch();
  const ToggleProfileDropdown = () => {
    setProfileDropdown((prev) => !prev);
  };

  // ~` Handle Logout ~` //
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
      navigate("/auth/login");
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
      children: ["Overview", "Landing", "Intro"],
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
      <nav className="fixed top-0 left-0 right-0 z-50  bg-gradient-to-r from-[#2f2a7c] via-[#3f33d1] to-[#2f2a7c]">
        {/* Main Navbar */}
        <div className="flex justify-between items-center px-4 py-2 h-14 max-w-[1440px] mx-auto">
          {/* Center: Logo */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/img/logo/learnix.png"
              alt="Logo"
              className="h-11 w-32 sm:h-12 sm:w-36  "
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
          <ul className="hidden sm:flex items-center space-x-6 text-[14px] font-medium text-black relative">
            {navLinks.map(({ label, icon, children }) => (
              <li key={label} className="relative group cursor-pointer">
                <div className="flex items-center text-white space-x-1 hover:text-[#FF4D6D]">
                  {icon}
                  <span>{label}</span>
                  <FaChevronDown className="text-xs mt-[1px]" />
                </div>
                {children && (
                  <ul className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md p-2 hidden group-hover:block z-50">
                    {children.map((child, idx) => (
                      <li
                        key={idx}
                        className="py-1 px-2 hover:bg-gray-100 text-sm text-gray-700 hover:text-[#FF4D6D] rounded"
                      >
                        {child}{" "}
                      </li>
                    ))}{" "}
                  </ul>
                )}{" "}
              </li>
            ))}{" "}
          </ul>

          {/* Desktop Right Icons */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Sun Icon */}
            <FaSun className="text-[16px] text-white  cursor-pointer" />{" "}
            {/* Cart Icon with Badge */}
            <div className="relative">
              <FaShoppingCart className="text-[16px] text-white cursor-pointer" />
              <div className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                1
              </div>
            </div>
            {/* Profile Image Button */}
            <div className="relative mt-2">
              <button
                onClick={ToggleProfileDropdown}
                className="focus:outline-none"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover cursor-pointer border border-gray-300"
                />
              </button>
              {/* Profile Dropdown */}
              {ProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2 px-4 border-b text-sm text-gray-700">
                    Hi, John
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
                      onClick={() => handleLogout()}
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </div>
                </div>
              )}{" "}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 sm:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header with logo and close icon */}
          <div className="flex items-center justify-between px-4 py-3 ">
            <img
              src="/assets/img/logo/learnix.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <button onClick={toggleMenu} className="text-gray-700">
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

          {/* Menu content */}
          <div className="p-4 space-y-4 overflow-y-auto h-full pb-20">
            <ul className="flex flex-col space-y-3 text-[14px] font-medium text-black">
              {navLinks.map(({ label, icon, children }) => (
                <li key={label}>
                  <div
                    onClick={() => handleDropdownToggle(label)}
                    className="flex justify-between items-center cursor-pointer hover:bg-gray-100 px-2 py-2 rounded"
                  >
                    <div className="flex items-center space-x-2">
                      {icon}
                      <span
                        className={
                          label === "Home" ? "text-[#FF4D6D] font-semibold" : ""
                        }
                      >
                        {label}{" "}
                      </span>
                    </div>
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        openDropdown === label ? "rotate-180" : ""
                      } text-gray-500`}
                    />
                  </div>
                  {openDropdown === label && children && (
                    <ul className="pl-8 mt-2 space-y-1 text-sm text-gray-600">
                      {children.map((child, idx) => (
                        <li
                          key={idx}
                          className="py-1 hover:text-[#FF4D6D] transition-colors"
                        >
                          {child}{" "}
                        </li>
                      ))}{" "}
                    </ul>
                  )}{" "}
                </li>
              ))}{" "}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
