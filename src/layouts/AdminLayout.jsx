import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
