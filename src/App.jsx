import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import RegistionPage from "./pages/RegistionPage";
import LoginPage from "./pages/LoginPage";
import VendorLayout from "./layouts/VendorLayout";
import NotFoundPage from "./pages/NotFoundPage";
import RestrictedRoute from "./components/RestrictedRoute";

import { AuthProvider } from "./context/AuthContext";
import UserDashboard from "./components/user/UserDashboard";
import Profile from "./components/user/Profile";
import ApplyVendor from "./components/user/ApplyVendor";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const authToken = localStorage.getItem("authToken");

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/register",
          element: (
            <RestrictedRoute>
              <RegistionPage />
            </RestrictedRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          ),
        },
      ],
    },
    {
      path: "/user",
      element: (
        <ProtectedRoute>
          <VendorLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={`/user/dashboard`} replace />,
        },
        {
          path: `/user/dashboard`,
          element: userData ? (
            <UserDashboard userData={userData} />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/user/profile",
          element: userData ? (
            <Profile userData={userData} authToken={authToken} />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/user/apply",
          element: userData ? (
            <ApplyVendor userData={userData} />
          ) : (
            <Navigate to="/" />
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
};

export default App;
