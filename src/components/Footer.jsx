import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p>
              We are a team of passionate developers making the web a better
              place.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM9.6 19.2V9.6H6.72v9.6H9.6zm-1.44-10.8c.96 0 1.68-.72 1.68-1.68 0-.96-.72-1.68-1.68-1.68-.96 0-1.68.72-1.68 1.68 0 .96.72 1.68 1.68 1.68zm12 10.8v-5.28c0-2.88-1.56-4.32-3.6-4.32-1.68 0-2.4.96-2.88 1.68v-1.44H12v9.6h2.88v-5.28c0-1.44.24-2.88 2.04-2.88 1.8 0 1.8 1.68 1.8 3.12v5.04H20.16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
