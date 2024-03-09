import { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Landing from "./pages/Landing.jsx";
import LoginFarmer from "../src/pages/LoginFarmer.jsx";
import LoginStudent from "../src/pages/LoginStudent.jsx";
import LoginDS from "../src/pages/LoginDS.jsx";
import LoginAdmin from "../src/pages/LoginAdmin.jsx";
import SignupFarmer from "../src/pages/SignupFarmer.jsx";
import SignupStudent from "../src/pages/SignupStudent.jsx";
import SignupDS from "../src/pages/SignupDS.jsx";
import HomeFarmer from "../src/pages/HomeFarmer.jsx";
import HomeStudent from "../src/pages/HomeStudent.jsx";
import HomeDS from "../src/pages/HomeDS.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState('');
  const getRoleFromToken = () => {
    const token = localStorage.getItem('accessToken');
  
    if (!token) {
      return ''; 
    }
  
    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const role = tokenPayload.role; 
      return role || ''; 
    } catch (error) {
      console.error('Error decoding token:', error);
      return ''; 
    }
  };
  

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAuthenticated(!!token);
    const role = getRoleFromToken(token);
    setRole(role);
    console.log(role)
  }, []);
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/LoginFarmer" element={<LoginFarmer />} />
          <Route path="/LoginStudent" element={<LoginStudent />} />
          <Route path="/LoginDS" element={<LoginDS />} />
          <Route path="/LoginAdmin" element={<LoginAdmin />} />
          <Route path="/SignupFarmer" element={<SignupFarmer />} />
          <Route path="/SignupStudent" element={<SignupStudent />} />
          <Route path="/SignupDS" element={<SignupDS />} />
          <Route
            path="/HomeFarmer"
            element={
              authenticated && role === "Farmer" ? (<HomeFarmer />) : (<LoginFarmer />)
            }
          />
          <Route path="/HomeStudent" 
          element={authenticated && role==="Student" ? <HomeStudent /> : <LoginStudent />}
           />
          <Route 
          path="/HomeDS" 
          element={authenticated && role==="DS" ? <HomeDS /> : <LoginDS />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
