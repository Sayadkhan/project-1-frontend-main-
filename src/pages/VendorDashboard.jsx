import { NavLink, Outlet } from "react-router-dom";

const VendorLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-4">
        <nav className="space-y-4">
          <NavLink to="/dashboard" className="block">
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/overview" className="block">
            Overview
          </NavLink>
          <NavLink to="/dashboard/profile" className="block">
            Profile
          </NavLink>
          <NavLink to="/dashboard/orders" className="block">
            Orders
          </NavLink>
          <NavLink to="/dashboard/settings" className="block">
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet /> {/* Renders the nested child route components */}
      </main>
    </div>
  );
};

export default VendorLayout;
