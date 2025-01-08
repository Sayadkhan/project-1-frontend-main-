import { useState } from "react";
import axiosInstance from "../api/axios";

// {
//   "companyName": "TechCorp",
//   "companyDomain": "techcorp.com",
//   "registrationName": "John Doe",
//   "registrationPhone": "1234567890",
//   "registrantEmail": "john.doe@techcorp.com",
//   "secondaryEmail": "john.doe.secondary@techcorp.com",
//   "city": "New York",
//   "country": "USA",
//   "password": "SecurePassword123",
//   "confirmPassword": "SecurePassword123",
//   "vendorApplication": {
//     "documents": [
//     ],
//     "status": "nothing",
//     "appliedAt": null,
//     "reviewedAt": null,
//     "adminComment": ""
//   }
// }

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDomain: "",
    registrationName: "",
    registrationPhone: "",
    registrantEmail: "",
    secondaryEmail: "",
    city: "dhaka",
    country: "",
    password: "",
    confirmPassword: "",
  });

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
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axiosInstance.post("/register", formData);

      setSuccessMessage(
        response.data.message || "User registered successfully!"
      );
      setTimeout(() => setSuccessMessage(""), 3000); //
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div className="container mx-auto ">
        <div className=" bg-white bg-opacity-90 rounded-lg shadow-lg min-w-full p-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Registration Form
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Domain
              </label>
              <input
                type="text"
                name="companyDomain"
                value={formData.companyDomain}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registration Name
              </label>
              <input
                type="text"
                name="registrationName"
                value={formData.registrationName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registration Phone
              </label>
              <input
                type="text"
                name="registrationPhone"
                value={formData.registrationPhone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Registrant Email
              </label>
              <input
                type="email"
                name="registrantEmail"
                value={formData.registrantEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secondary Email
              </label>
              <input
                type="email"
                name="secondaryEmail"
                value={formData.secondaryEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              >
                <option value="">Select a country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
              </select>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Register
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
          {successMessage && (
            <p className="mt-4 text-center text-green-500">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
