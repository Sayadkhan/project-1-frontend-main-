import { Link, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiUser3Line,
  RiStore2Line,
  RiUserSettingsLine,
} from "react-icons/ri";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/admin", icon: RiDashboardLine, text: "Dashboard" },
    { to: "/admin/user", icon: RiUser3Line, text: "User Management" },
    { to: "/admin/vendor", icon: RiStore2Line, text: "Vendor Management" },
    { to: "/admin/profile", icon: RiUserSettingsLine, text: "Profile" },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav>
        {links.map((link) => (
          <Link
            key={link.to}
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
        ))}
      </nav>
    </div>
  );
}
