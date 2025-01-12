import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-3 text-white bg-gray-800 fixed top-2 left-2 z-50 rounded-full"
        aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>
      <Navbar />
      <div>
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6 lg:ml-64 transition-all duration-300">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
