import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import Test from "./pages/Test.jsx";
import Journal from "./pages/Journal.jsx";
import MoodTracker from "./pages/MoodTracker.jsx";
import MoodInput from "./pages/MoodInput.jsx";
import Checklist from "./pages/Checklist.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Preferences from "./pages/Preferences.jsx";
import About from "./pages/About.jsx";

// const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     setAuthenticated(!!token);
//     console.log("Token from localStorage:", token);
//   }, []);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="login" element={<Login />}></Route>
      <Route path="preferences" element={<Preferences />} />
      <Route path="test" element={<Test />} />
      <Route path="journal" element={<Journal />} />
      <Route path="checklist" key="checklist" element={<Checklist />} />
      <Route path="moodtracker" element={<MoodTracker />} />
      <Route path="moodinput" element={<MoodInput />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
