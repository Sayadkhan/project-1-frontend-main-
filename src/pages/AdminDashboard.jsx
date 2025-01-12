import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiUser3Line, RiStore2Line, RiTimeLine } from "react-icons/ri";
import StatCard from "../components/StatCard";
import axiosInstance from "../api/axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState([
    { title: "Total Users", value: "0", icon: RiUser3Line },
    { title: "Total Vendors", value: "0", icon: RiStore2Line },
    { title: "Pending Requests", value: "0", icon: RiTimeLine },
  ]);

  // Fetch authToken from Redux
  const { authToken } = useSelector((state) => state.auth);

  console.log("Auth Token:", authToken);

  // Fetch total users
  const fetchTotalUsers = async () => {
    try {
      const response = await axiosInstance.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
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

  // Fetch total vendors
  const fetchAllVendors = async () => {
    try {
      const response = await axiosInstance.get("/admin/vendors", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const totalVendors = response.data.vendors.length;

      setStats((currentStats) =>
        currentStats.map((stat) =>
          stat.title === "Total Vendors"
            ? { ...stat, value: totalVendors?.toLocaleString() }
            : stat
        )
      );
    } catch (error) {
      console.error(
        "Error fetching vendors:",
        error.response?.data || error.message
      );
    }
  };

  // Fetch pending vendor applications
  const fetchPendingVendorApplications = async () => {
    try {
      const response = await axiosInstance.get("/admin/vendor/applications", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const totalApplications = response.data.length;

      setStats((currentStats) =>
        currentStats.map((stat) =>
          stat.title === "Pending Requests"
            ? { ...stat, value: totalApplications?.toLocaleString() }
            : stat
        )
      );
    } catch (error) {
      console.error(
        "Error fetching vendor applications:",
        error.response?.data || error.message
      );
    }
  };

  // Fetch stats on component mount
  useEffect(() => {
    if (authToken) {
      fetchTotalUsers();
      fetchAllVendors();
      fetchPendingVendorApplications();
    }
  }, [authToken]);

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">
        Admin Dashboard
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
