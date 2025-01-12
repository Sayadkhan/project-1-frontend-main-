import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ children }) => {
  const data = useSelector((state) => state.auth);

  if (data.user?.role === "user") {
    // Redirect to the user dashboard if token exists and role is "user"
    return <Navigate to="/user" />;
  }
  if (data.user?.role === "admin") {
    // Redirect to the admin dashboard if token exists and role is "admin"
    return <Navigate to="/admin" />;
  }

  // Render the requested page (e.g., LoginPage) if no token
  return children;
};

export default RestrictedRoute;
