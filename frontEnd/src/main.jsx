import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path={['/home', '/about']} 
          element={<Layout />}
        >
          <Route path="/home" element={<Home />} />
          
        </Route>
        <Route
          path={['/signup', '/login']} 
        >
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
