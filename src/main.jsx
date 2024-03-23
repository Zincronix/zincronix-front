import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/main.css";
import { RouterProvider } from "react-router-dom";

import { getRoutes } from "./Navigation/Navigation.jsx";

const router = getRoutes();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
