import { useState } from "react";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigite = useNavigate();

  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", formData);

      setSuccessMessage(
        response.data.message || "User registered successfully!"
      );

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", response.data.user);

      setTimeout(() => setSuccessMessage(""), 3000);
      navigite("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="container mx-auto flex items-center justify-center ">
        <div className=" bg-white bg-opacity-90 rounded-lg shadow-lg w-[30rem] p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login To Your Account
          </h2>
          <form onSubmit={handleSubmit} className="grid gap-10">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
