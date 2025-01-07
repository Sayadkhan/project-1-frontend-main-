import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import RegistionPage from "./pages/RegistionPage";

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
          element: <RegistionPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
