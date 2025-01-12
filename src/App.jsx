import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useSelector } from "react-redux";

import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import RegistionPage from "./pages/RegistionPage";
import LoginPage from "./pages/LoginPage";
import VendorLayout from "./layouts/VendorLayout";
import NotFoundPage from "./pages/NotFoundPage";
import RestrictedRoute from "./components/RestrictedRoute";

import UserDashboard from "./components/user/UserDashboard";
import Profile from "./components/user/Profile";
import ApplyVendor from "./components/user/ApplyVendor";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import VendorManagement from "./pages/VendorManagement";
import PendingVendor from "./pages/PendingVendor";
import AllVendor from "./pages/AllVendor";
import AddLogo from "./components/admin/AddLogo";
import AdminProfile from "./pages/AdminProfile";

const App = () => {
  // Get user and token from Redux state
  const { user, authToken } = useSelector((state) => state.auth);

  console.log("User Data:", user);
  console.log("Auth Token:", authToken);

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
          element: user ? (
            <UserDashboard userData={user} />
          ) : (
            <Navigate to="/" />
          ),
        },
        {
          path: "/user/profile",
          element: user ? <Profile userData={user} /> : <Navigate to="/" />,
        },
        {
          path: "/user/apply",
          element: user ? <ApplyVendor userData={user} /> : <Navigate to="/" />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute role="admin">
          <AdminLayout />
        </ProtectedRoute>
      ),

      children: [
        { index: true, element: <Navigate to={`/admin/dashboard`} /> },
        { path: "/admin/dashboard", element: <AdminDashboard /> },
        { path: "/admin/user", element: <UserManagement /> },
        {
          path: "/admin/profile",
          element: user ? (
            <AdminProfile userData={user} authToken={authToken} />
          ) : (
            <Navigate to="/" />
          ),
        },
        { path: "/admin/vendor", element: <VendorManagement /> },
        { path: "/admin/vendor/pending", element: <PendingVendor /> },
        { path: "/admin/vendor/approved", element: <AllVendor /> },
        {
          path: "/admin/add/logo",
          element: user ? (
            <AddLogo userData={user} authToken={authToken} />
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

  return <RouterProvider router={route} />;
};

export default App;
