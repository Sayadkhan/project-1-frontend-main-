import { useState } from "react";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const bgImage = "../../../2.png";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
      setTimeout(() => setSuccessMessage(""), 3000);
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/2.png')` }}
    >
      <div className="bg-black container mx-auto flex items-center justify-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg w-[30rem] p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login To Your Account five
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
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          {message && (
            <p className="mt-4 text-red-500 text-center">{message}</p>
          )}
          {successMessage && (
            <p className="mt-4 text-green-500 text-center">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
