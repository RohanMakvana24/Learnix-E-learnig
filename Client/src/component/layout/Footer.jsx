import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl bg-[#f9f9f9] border-t border-gray-200 mx-auto px-6 py-10">
      <div className="flex flex-wrap justify-between">
        {/* Branding & Contact */}
        <div className="w-full sm:w-auto max-w-xs mb-8 sm:mb-0">
          <div className="flex items-center mb-3">
            <img
              alt="Learnix logo"
              className="w-30 h-8 -ml-2"
              src="/assets/img/logo/learnix.png"
            />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
            Empower your learning journey with top-tier online courses and
            expert instructors.
          </p>
          <div className="flex items-center mt-6 text-gray-600 text-sm font-semibold">
            <FaPhoneAlt className="mr-2 text-gray-600" />
            +91 98765 43210
          </div>
        </div>

        {/* Resources */}
        <div className="w-1/2 sm:w-auto mb-8 sm:mb-0">
          <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Course Catalog</li>
            <li>Student Guide</li>
            <li>Instructor Portal</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Company */}
        <div className="w-1/2 sm:w-auto mb-8 sm:mb-0">
          <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Learnix</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-1/2 sm:w-auto mb-8 sm:mb-0">
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>My Dashboard</li>
            <li>Become an Instructor</li>
            <li>Mobile App</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full sm:w-auto max-w-xs">
          <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-3 mb-4">
            <a
              aria-label="Facebook"
              href="#"
              className="w-7 h-7 flex items-center justify-center rounded bg-gray-900 text-white text-xs"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="w-7 h-7 flex items-center justify-center rounded bg-gray-900 text-white text-xs"
            >
              <FaTwitter />
            </a>
            <a
              aria-label="Instagram"
              href="#"
              className="w-7 h-7 flex items-center justify-center rounded bg-gray-900 text-white text-xs"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="LinkedIn"
              href="#"
              className="w-7 h-7 flex items-center justify-center rounded bg-gray-900 text-white text-xs"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 Learnix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
