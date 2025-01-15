// import { useState } from "react";
// import axiosInstance from "../api/axios";
// import { useNavigate } from "react-router-dom";

// // {
// //   "companyName": "TechCorp",
// //   "companyDomain": "techcorp.com",
// //   "registrationName": "John Doe",
// //   "registrationPhone": "1234567890",
// //   "registrantEmail": "john.doe@techcorp.com",
// //   "secondaryEmail": "john.doe.secondary@techcorp.com",
// //   "city": "New York",
// //   "country": "USA",
// //   "password": "SecurePassword123",
// //   "confirmPassword": "SecurePassword123",
// //   "vendorApplication": {
// //     "documents": [
// //     ],
// //     "status": "nothing",
// //     "appliedAt": null,
// //     "reviewedAt": null,
// //     "adminComment": ""
// //   }
// // }

// const RegistrationPage = () => {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     companyDomain: "",
//     registrationName: "",
//     registrationPhone: "",
//     registrantEmail: "",
//     secondaryEmail: "",
//     city: "",
//     country: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [message, setMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navgiate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
//   const bgImage = "../../../2.png";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post("/register", formData);

//       setSuccessMessage(
//         response.data.message || "User registered successfully!"
//       );
//       navgiate("/login");
//       setTimeout(() => setSuccessMessage(""), 3000); //
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Registration failed.");
//       setTimeout(() => setMessage(""), 3000);
//     }
//   };

//   return (
//     <div
//       style={{ backgroundImage: `url(${bgImage})` }}
//       className="flex items-center justify-center min-h-screen "
//     >
//       <div className="container mx-auto ">
//         <div className=" bg-white bg-opacity-90 rounded-lg shadow-lg min-w-full p-10">
//           <h2 className="text-3xl font-bold text-center text-gray-800">
//             Registration Form
//           </h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Company Name
//               </label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Company Domain
//               </label>
//               <input
//                 type="text"
//                 name="companyDomain"
//                 value={formData.companyDomain}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Registration Name
//               </label>
//               <input
//                 type="text"
//                 name="registrationName"
//                 value={formData.registrationName}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Registration Phone
//               </label>
//               <input
//                 type="text"
//                 name="registrationPhone"
//                 value={formData.registrationPhone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Registrant Email
//               </label>
//               <input
//                 type="email"
//                 name="registrantEmail"
//                 value={formData.registrantEmail}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Secondary Email
//               </label>
//               <input
//                 type="email"
//                 name="secondaryEmail"
//                 value={formData.secondaryEmail}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Country
//               </label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               >
//                 <option value="">Select a country</option>
//                 <option value="United States">United States</option>
//                 <option value="Canada">Canada</option>
//                 <option value="United Kingdom">United Kingdom</option>
//                 <option value="Australia">Australia</option>
//                 <option value="India">India</option>
//                 <option value="Germany">Germany</option>
//                 <option value="France">France</option>
//                 <option value="Japan">Japan</option>
//                 <option value="China">China</option>
//                 <option value="Brazil">Brazil</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
//             >
//               Register
//             </button>
//           </form>
//           {message && (
//             <p className="mt-4 text-center text-red-500">{message}</p>
//           )}
//           {successMessage && (
//             <p className="mt-4 text-center text-green-500">{successMessage}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";

const RegistrationPage = () => {
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
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Company Domain
                </label>
                <input
                  type="text"
                  name="companyDomain"
                  value={formData.companyDomain}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
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
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  name="registrationName"
                  value={formData.registrationName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="registrationPhone"
                  value={formData.registrationPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="India">India</option>
                  </select>
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
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Primary Email
                </label>
                <input
                  type="email"
                  name="registrantEmail"
                  value={formData.registrantEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your primary email"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Secondary Email
                </label>
                <input
                  type="email"
                  name="secondaryEmail"
                  value={formData.secondaryEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your secondary email"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1 group-hover:text-purple-600 transition-colors">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
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
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <div className="mt-4 flex justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
          <div className="rounded-md shadow-sm -space-y-px">{renderStep()}</div>

          {message && (
            <div className="text-red-500 text-center text-sm animate-fade-in">
              {message}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-center text-sm animate-fade-in">
              {successMessage}
            </div>
          )}

          <div className="flex justify-between space-x-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="group relative w-full flex justify-center py-2 px-4 border border-purple-300 text-sm font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
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
