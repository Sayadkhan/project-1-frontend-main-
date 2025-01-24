import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyDomain: "",
    registrationName: "",
    registrantPosition: "",
    registrationPhone: "",
    registrantEmail: "",
    secondaryEmail: "",
    city: "",
    state: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      const response = await axiosInstance.post("/register", formData);
      setSuccessMessage(response.data.message || "Registration successful!");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">
              Company Information
            </h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Domain
                </label>
                <input
                  type="text"
                  name="companyDomain"
                  value={formData.companyDomain}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., company.com"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registrant Name
                </label>
                <input
                  type="text"
                  name="registrationName"
                  value={formData.registrationName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registrant Position in Company
                </label>
                <input
                  type="text"
                  name="registrantPosition"
                  value={formData.registrantPosition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Manager, CEO"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registrant Phone Number
                </label>
                <input
                  type="tel"
                  name="registrationPhone"
                  value={formData.registrationPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your state"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">
              Account Information
            </h3>
            <div className="space-y-4">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registrant Company Email Address
                </label>
                <input
                  type="email"
                  name="registrantEmail"
                  value={formData.registrantEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your company email"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registrant Secondary Email Address (Optional)
                </label>
                <input
                  type="email"
                  name="secondaryEmail"
                  value={formData.secondaryEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your secondary email"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <div className="mt-4 flex justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full ${
                  currentStep === step
                    ? "bg-purple-600 scale-125"
                    : currentStep > step
                    ? "bg-purple-300"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {renderStep()}

          {message && <div className="text-red-500 text-center">{message}</div>}
          {successMessage && (
            <div className="text-green-500 text-center">{successMessage}</div>
          )}

          <div className="flex justify-between space-x-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="w-full py-2 px-4 text-purple-700 bg-white border border-purple-300 rounded-md"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="w-full py-2 px-4 text-white bg-purple-600 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-purple-600 rounded-md"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
