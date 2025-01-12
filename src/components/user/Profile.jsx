import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../api/axios";

const Profile = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDomain: "",
    registrationName: "",
    registrationPhone: "",
    registrantEmail: "",
    secondaryEmail: "",
    city: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state

  // Get user data and token from Redux store
  const { user, authToken } = useSelector((state) => state.auth);

  console.log("User Data:", user);
  console.log("token :", authToken);

  // Populate formData with user data on initial render
  useEffect(() => {
    if (user) {
      setFormData({
        companyName: user.companyName || "",
        companyDomain: user.companyDomain || "",
        registrationName: user.registrationName || "",
        registrationPhone: user.registrationPhone || "",
        registrantEmail: user.registrantEmail || "",
        secondaryEmail: user.secondaryEmail || "",
        city: user.city || "",
        country: user.country || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password && formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axiosInstance.put(
        "/user/updateProfile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Profile updated successfully!");
      console.log("Updated Profile:", response.data);
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      setMessage(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Update Profile</h1>
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

        <button
          type="submit"
          disabled={loading}
          className={`col-span-2 w-full px-4 py-2 font-bold text-white ${
            loading ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-700"
          } rounded-md focus:outline-none focus:ring focus:ring-indigo-200`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Profile;
