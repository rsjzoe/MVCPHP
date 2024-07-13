import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard} from "./pages/dashboard/dashboard"
import {Etudiants} from "./pages/etudiants/etudiants"
import { Auth } from "./pages/auth/auth";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth/>,
  },
  {
    path:'/',
    element:<Dashboard/>
  },
  {
    path:"/etudiants",
    element:<Etudiants />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
