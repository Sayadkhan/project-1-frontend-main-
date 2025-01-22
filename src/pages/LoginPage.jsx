import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/AuthSlice";
import { useNavigate } from "react-router-dom";
import Turnstile from "react-turnstile";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [companyDomain, setCompanyDomain] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !companyDomain ||
      !captchaToken
    ) {
      alert("Please fill in all fields and complete CAPTCHA");
      return;
    }

    dispatch(loginUser({ ...formData, companyDomain })).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        const user = result.payload;
        if (user?.user?.role === "admin") {
          navigate("/admin");
        } else if (user?.user?.role === "user") {
          navigate("/user");
        } else {
          alert("Unknown user role");
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:shadow-2xl">
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="group">
              <label className="block text-sm font-medium text-gray-700">
                Company Domain
              </label>
              <input
                type="text"
                value={companyDomain}
                onChange={(e) => setCompanyDomain(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="your-company.com"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="mt-2 text-sm text-purple-600 hover:text-purple-800"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
            </div>
          </div>
          <div>
            <Turnstile
              sitekey="0x4AAAAAAA5KdgDzzgQl_aA5"
              onSuccess={(token) => setCaptchaToken(token)}
              onError={() => setCaptchaToken("")}
              onExpire={() => setCaptchaToken("")}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            disabled={!captchaToken}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
