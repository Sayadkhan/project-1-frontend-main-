import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import RegistionPage from "./pages/RegistionPage";
import LoginPage from "./pages/LoginPage";
import VendorLayout from "./layouts/VendorLayout";
import VendorDashboard from "./pages/VendorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPage from "./pages/NotFoundPage";
import RestrictedRoute from "./components/RestrictedRoute";
import Overview from "./components/Overview";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
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
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <VendorLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "",
          element: <VendorDashboard />,
        },
        {
          path: "overview",
          element: <Overview />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "apply-for-vendor",
          element: <Settings />,
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
