import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      zIndex: 9999,
    });
  };
  return (
    //footer
    <footer className="bg-gradient-to-b from-white to-purple-50 text-gray-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4 sm:space-y-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center group justify-center sm:justify-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-purple-700 transition-colors duration-300">
                <span className="text-white text-lg sm:text-xl font-bold">
                  LOGO
                </span>
              </div>
              <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                company name
              </span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center sm:text-left">
              Creating innovative solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div className="transform hover:-translate-y-1 transition-transform duration-300 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {["Home", "About Us", "Services", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300 justify-center sm:justify-start"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform hover:-translate-y-1 transition-transform duration-300 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center space-x-3 justify-center sm:justify-start">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  123 Business Street
                </span>
              </p>
              <p className="flex items-center space-x-3 justify-center sm:justify-start">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm sm:text-base">(555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-3 justify-center sm:justify-start">
                <svg
                  className="w-5 h-5 text-purple-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm sm:text-base break-all">
                  info@yourcompany.com
                </span>
              </p>
              <div className="flex space-x-5 mt-4 sm:mt-6 justify-center sm:justify-start">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-600 hover:text-purple-600 transform hover:scale-125 transition-all duration-300"
                    >
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-100 my-8 sm:my-12" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            © 2025 Your Company Name. All Rights Reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-400/50 hover:scale-110 group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
