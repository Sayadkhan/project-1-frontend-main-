import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    // Redirect to the dashboard if token exists
    return <Navigate to="/dashboard" />;
  }

  // Render the requested page (e.g., LoginPage) if no token
  return children;
};

export default RestrictedRoute;
