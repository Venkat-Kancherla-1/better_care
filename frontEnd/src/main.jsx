import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Test from "./pages/Test.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Preferences from "./pages/Preferences.jsx";

// const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     setAuthenticated(!!token);
//     console.log("Token from localStorage:", token);
//   }, []);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="preferences" element={<Preferences />} />
      <Route path="test" element={<Test />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
