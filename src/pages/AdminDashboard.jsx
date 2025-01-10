import { useEffect, useState } from "react";
import { RiUser3Line, RiStore2Line, RiTimeLine } from "react-icons/ri";
import StatCard from "../components/StatCard";

const AdminDashboard = () => {
  const [stats, setStats] = useState([
    { title: "Total Users", value: "1,234", icon: RiUser3Line },
    { title: "Total Vendors", value: "56", icon: RiStore2Line },
    { title: "Pending Requests", value: "12", icon: RiTimeLine },
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStats((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          value: Math.floor(Math.random() * 2000).toLocaleString(),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
