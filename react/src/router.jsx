import { createBrowserRouter, Navigate } from "react-router-dom";
import Serveys from "./views/Serveys";
import Dashboard from "./views/Dashboard";
import Signup from "./views/Signup";
import Login from "./views/Login";
import GuestLayout from "./views/components/GuestLayout";
import DefaultLayout from "./views/components/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "serveys",
        element: <Serveys />,
      },
    ],
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
