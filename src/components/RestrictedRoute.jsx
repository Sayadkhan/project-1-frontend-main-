import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("userData"));

  if (token && user.role === "user") {
    // Redirect to the dashboard if token exists
    return <Navigate to="/user" />;
  }
  if (token && user.role === "admin") {
    // Redirect to the admin dashboard if token exists
    return <Navigate to="/admin" />;
  }

  // Render the requested page (e.g., LoginPage) if no token
  return children;
};

export default RestrictedRoute;
