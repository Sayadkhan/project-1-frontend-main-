import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  RiDashboardLine,
  RiUser3Line,
  RiStore2Line,
  RiUserSettingsLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { useState } from "react";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const links = [
    { to: "/admin", icon: RiDashboardLine, text: "Dashboard" },
    { to: "/admin/user", icon: RiUser3Line, text: "User Management" },
    {
      to: "/admin/vendor",
      icon: RiStore2Line,
      text: "Vendor Management",
      subLinks: [
        { to: "/admin/vendor/pending", text: "Pending Vendors" },
        { to: "/admin/vendor/approved", text: "Approved Vendors" },
      ],
    },
    { to: "/admin/profile", icon: RiUserSettingsLine, text: "Profile" },
    {
      to: "/admin/settings",
      icon: RiStore2Line,
      text: "Website Settings",
      subLinks: [{ to: "/admin/add/logo", text: "Logo" }],
    },
  ];

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate("/login");
  };

  const toggleDropdown = (link) => {
    setActiveDropdown((prev) => (prev === link ? null : link));
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 z-40`}
      >
        <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>

        <nav>
          {links.map((link) => (
            <div key={link.to}>
              {link.subLinks ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(link.to)}
                    className={`flex items-center gap-2 p-3 rounded-lg mb-2 w-full ${
                      location.pathname.startsWith(link.to)
                        ? "bg-blue-600"
                        : "hover:bg-gray-700"
                    }`}
                    aria-expanded={activeDropdown === link.to}
                    aria-label={`Toggle ${link.text}`}
                  >
                    <link.icon className="text-xl" />
                    <span>{link.text}</span>
                    {activeDropdown === link.to ? (
                      <RiArrowUpSLine className="ml-auto text-xl" />
                    ) : (
                      <RiArrowDownSLine className="ml-auto text-xl" />
                    )}
                  </button>
                  {activeDropdown === link.to && (
                    <div className="ml-8">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.to}
                          to={subLink.to}
                          className={`block p-2 rounded-lg mb-1 ${
                            location.pathname === subLink.to
                              ? "bg-blue-600"
                              : "hover:bg-gray-700"
                          }`}
                        >
                          {subLink.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.to}
                  className={`flex items-center gap-2 p-3 rounded-lg mb-2 ${
                    location.pathname === link.to
                      ? "bg-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <link.icon className="text-xl" />
                  <span>{link.text}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-4 w-full text-left p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
}
