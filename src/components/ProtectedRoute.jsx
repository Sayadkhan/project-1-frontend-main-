import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // Get token and user from Redux state
  const { user, authToken } = useSelector((state) => state.auth);

  console.log("User Data:", user);

  // If no token is available, redirect to login
  if (!user || !authToken) {
    return <Navigate to="/login" />;
  }

  // Render the requested protected route
  return children;
};

export default ProtectedRoute;
