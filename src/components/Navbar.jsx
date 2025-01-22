// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../features/AuthSlice"; // Import logout action

// import { motion } from "framer-motion";
// import axiosInstance from "../api/axios";
// import { BiUser } from "react-icons/bi";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [logo, setLogo] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Get user and authToken from Redux
//   const { user, authToken } = useSelector((state) => state.auth);

//   // Fetch the logo on component mount
//   useEffect(() => {
//     const fetchLogo = async () => {
//       try {
//         const response = await axiosInstance.get("/settings/logo");
//         setLogo(response.data.logo);
//       } catch (error) {
//         console.error("Error fetching logo:", error.message);
//       }
//     };

//     fetchLogo();
//   }, []);

//   // Logout Handler
//   const handleLogout = () => {
//     dispatch(logoutUser()); // Dispatch the logout action to clear Redux state
//     navigate("/login"); // Redirect to login page
//   };

//   // Navigate to the user's dashboard
//   const navigateToDashboard = () => {
//     if (user?.role === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/user");
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-white/80"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center"
//           >
//             {/* Logo */}
//             <Link to={"/"} className="flex items-center space-x-4">
//               {logo ? (
//                 <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
//               ) : (
//                 <span className="font-bold text-lg">IH</span>
//               )}
//             </Link>
//           </motion.div>
//           <div className="flex space-x-8">
//             {!authToken
//               ? // Show these links if the user is not logged in
//                 [
//                   { to: "/services", text: "Services" },
//                   { to: "/about", text: "About" },
//                   { to: "/contact", text: "Contact" },
//                   { to: "/login", text: "Login" },
//                   { to: "/register", text: "Registration" },
//                 ].map((link, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -2 }}
//                     whileTap={{ y: 0 }}
//                   >
//                     <Link
//                       to={link.to}
//                       className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-lg font-medium transition-colors duration-300 uppercase"
//                     >
//                       {link.text}
//                     </Link>
//                   </motion.div>
//                 ))
//               : // Show other links for logged-in users
//                 [
//                   { to: "/services", text: "Services" },
//                   { to: "/about", text: "About" },
//                   { to: "/contact", text: "Contact" },
//                 ].map((link, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ y: -2 }}
//                     whileTap={{ y: 0 }}
//                   >
//                     <Link
//                       to={link.to}
//                       className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-lg font-medium transition-colors duration-300 uppercase"
//                     >
//                       {link.text}
//                     </Link>
//                   </motion.div>
//                 ))}
//             {authToken && (
//               // Logout button for logged-in users
//               <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-700 hover:text-red-600 px-3 py-2 text-lg font-medium transition-colors duration-300 uppercase"
//                 >
//                   Logout
//                 </button>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            to="/"
            className="text-2xl font-bold text-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/">Logo</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                // href={item.href}
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors flex items-center gap-2"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link to={item.href}>
                  {item.icon}
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-purple-500 text-white rounded-full font-medium transition-all duration-300"
              >
                <Link to={"/login"}>Login</Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-purple-500 text-white rounded-full font-medium transition-all duration-300"
              >
                <Link to={"/register"}>Register</Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-purple-600" />
            ) : (
              <Menu className="w-6 h-6 text-purple-600" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="block py-3 text-gray-600 hover:text-purple-600 font-medium transition-colors flex items-center gap-2 px-2"
                whileHover={{ x: 4 }}
              >
                <Link to={item.href}>
                  {item.icon}
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="mt-4 space-y-3">
              <motion.div className="block py-3 text-purple-600 text-center font-medium border border-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                <Link to={"/login"}>Login</Link>
              </motion.div>
              <motion.div
                href="/register"
                className="block py-3 bg-purple-600 text-white text-center rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                <Link to={"/register"}>Register</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
