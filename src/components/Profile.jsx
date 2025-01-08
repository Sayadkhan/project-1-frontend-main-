import { useState, useEffect } from "react";

const Profile = ({ user }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update user profile)
    console.log("Updated Profile Data:", formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Call API to update profile
    // Example:
    // axiosInstance.post("/update-profile", formData)
    //   .then(response => alert("Profile updated successfully"))
    //   .catch(error => console.error("Error updating profile", error));
  };

  return (
    <div className="p-6">
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
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
