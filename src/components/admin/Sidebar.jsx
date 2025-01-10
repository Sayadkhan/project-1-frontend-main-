import { Link, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiUser3Line,
  RiStore2Line,
  RiUserSettingsLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);

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
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav>
        {links.map((link) => (
          <div key={link.to}>
            {link.subLinks ? (
              <div>
                <button
                  onClick={() => setIsVendorDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-2 p-3 rounded-lg mb-2 w-full ${
                    location.pathname.startsWith(link.to)
                      ? "bg-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <link.icon className="text-xl" />
                  <span className="text-nowrap">{link.text}</span>
                  {isVendorDropdownOpen ? (
                    <RiArrowUpSLine className="ml-auto text-xl" />
                  ) : (
                    <RiArrowDownSLine className="ml-auto text-xl" />
                  )}
                </button>
                {isVendorDropdownOpen && (
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
      </nav>
    </div>
  );
}
