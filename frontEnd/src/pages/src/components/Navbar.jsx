import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Farm to Fork</h1>
        </div>
        <div className="links">
          <a href="/" className="link">
            Home
          </a>
          <a href="/about" className="link">
            About
          </a>
          <a href="/contact" className="link">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
