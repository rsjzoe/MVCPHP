import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Etudiants } from "./pages/etudiants/etudiants";
import { Auth } from "./pages/auth/auth";
import { Layout } from "./components/layout/layout";
import { Information } from "./pages/etudiants/information/information";
import { Parents } from "./pages/etudiants/information/parents/parents";
import { Ecolage } from "./pages/etudiants/information/ecolage/ecolage";
import { Notes } from "./pages/etudiants/information/notes/notes";
import { Presence } from "./pages/etudiants/information/presence/presence";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "",
        element: <Dashboard />,
      },
      {
        path: "etudiants",
        element: <Etudiants />,
      },
      {
        path: "information",
        element: <Information />,
        children: [
          {
            index: true,
            path: "",
            element: <Parents />,
          },
          {
            path: "ecolage",
            element: <Ecolage />,
          },
          {
            path: "notes",
            element: <Notes />,
          },
          {
            path: "presence",
            element: <Presence />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
