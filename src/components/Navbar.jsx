import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-4">
          {/* <img src="/logo.png" alt="Logo" className="w-12 h-12 object-cover" /> */}
          <span className="text-white font-bold text-lg">IH</span>
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <a
            href="#about"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            ABOUT
          </a>
          <a
            href="#regions"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            REGIONS
          </a>
          <a
            href="#business"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            OUR BUSINESS
          </a>
          <a
            href="#news"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            NEWS
          </a>
          <a
            href="#invest"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            INVEST
          </a>
          <a
            href="#careers"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            CAREERS
          </a>
        </div>

        {/* Language Selector and Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={"/login"}
            className="bg-white text-black font-bold px-4 py-2 rounded"
          >
            login page
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            ABOUT
          </a>
          <a
            href="#regions"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            REGIONS
          </a>
          <a
            href="#business"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            OUR BUSINESS
          </a>
          <a
            href="#news"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            NEWS
          </a>
          <a
            href="#invest"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            INVEST
          </a>
          <a
            href="#careers"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            CAREERS
          </a>
          <Link
            to={"/login"}
            className="block px-4 py-2 bg-white text-black font-bold"
          >
            login page
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
