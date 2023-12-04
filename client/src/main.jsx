import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home.jsx"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
		errorElement: "error",
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
