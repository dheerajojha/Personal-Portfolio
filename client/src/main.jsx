import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: "error",
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<ToastContainer />
	</React.StrictMode>
);
