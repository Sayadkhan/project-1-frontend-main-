import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/AuthSlice"; // Import logout action
import axiosInstance from "../api/axios";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get user and authToken from Redux
  const data = useSelector((state) => state.auth);

  console.log("User Data:", data);

  // Fetch the logo on component mount
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axiosInstance.get("/settings/logo");
        setLogo(response.data.logo);
      } catch (error) {
        console.error("Error fetching logo:", error.message);
      }
    };

    fetchLogo();
  }, []);

  // Logout Handler
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action to clear Redux state
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-4">
          {logo ? (
            <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
          ) : (
            <span className="font-bold text-lg">IH</span>
          )}
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-black"
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

        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            to="/"
            className="text-sm hover:text-gray-500 transition uppercase"
          >
            Home
          </Link>
          <a
            href="#about"
            className="text-sm hover:text-gray-500 transition uppercase"
          >
            About
          </a>
          <a
            href="#business"
            className="text-sm hover:text-gray-500 transition uppercase"
          >
            Our Business
          </a>
          <a
            href="#invest"
            className="text-sm hover:text-gray-500 transition uppercase"
          >
            Invest
          </a>
          <a
            href="#careers"
            className="text-sm hover:text-gray-500 transition uppercase"
          >
            Careers
          </a>
        </div>

        {/* User Authentication */}
        {data.user ? (
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl focus:outline-none"
              >
                <BiUser />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md">
                  <p className="block px-4 py-2 text-sm text-gray-800">
                    Hello, {data.user.email || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to={"/login"}
              className="bg-gray-100 text-black font-bold px-4 py-2 rounded uppercase"
            >
              Login
            </Link>
            <span>or</span>
            <Link
              to={"/register"}
              className="bg-gray-100 text-black font-bold px-4 py-2 rounded uppercase"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <a
            href="#about"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            About
          </a>
          <a
            href="#business"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Our Business
          </a>
          <a
            href="#invest"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Invest
          </a>
          <a
            href="#careers"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Careers
          </a>
          {!authToken && (
            <>
              <Link
                to={"/login"}
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
