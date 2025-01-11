import { useEffect, useState } from "react";
import { RiUser3Line, RiStore2Line, RiTimeLine } from "react-icons/ri";
import StatCard from "../components/StatCard";
import axiosInstance from "../api/axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState([
    { title: "Total Users", value: "0", icon: RiUser3Line },
    { title: "Total Vendors", value: "0", icon: RiStore2Line },
    { title: "Pending Requests", value: "0", icon: RiTimeLine },
  ]);

  const [loading, setLoading] = useState(false);

  const fetchTotalUsers = async () => {
    try {
      const response = await axiosInstance.get("/admin/users");
      const totalUsers = response.data.users.length - 1;

      setStats((currentStats) =>
        currentStats.map((stat) =>
          stat.title === "Total Users"
            ? { ...stat, value: totalUsers?.toLocaleString() }
            : stat
        )
      );
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    }
  };

  const fetchAllVendor = async () => {
    try {
      const response = await axiosInstance.get("/admin/vendors");
      const totalVendor = response.data.vendors.length;

      setStats((currentStats) =>
        currentStats.map((stat) =>
          stat.title === "Total Vendors"
            ? { ...stat, value: totalVendor?.toLocaleString() }
            : stat
        )
      );
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    }
  };

  const getAlltheVendorApplications = async () => {
    try {
      const response = await axiosInstance.get("/admin/vendor/applications");
      const totalApplication = response.data.length;

      setStats((currentStats) =>
        currentStats.map((stat) =>
          stat.title === "Pending Requests"
            ? { ...stat, value: totalApplication?.toLocaleString() }
            : stat
        )
      );
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchTotalUsers();
    fetchAllVendor();
    getAlltheVendorApplications();

    const interval = setInterval(() => {
      fetchTotalUsers();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
