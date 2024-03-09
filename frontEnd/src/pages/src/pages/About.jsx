import React from "react";
import "../styles/About.css";
import logo from "../assets/farm-to-fork-high-resolution-logo-removebg-preview.png";
const About = () => {
  return (
    <div className="about">
      <div className="navbar">
        <nav className="navbar">
          <div className="logo">
            <img
              src={logo}
              className="logo-ff"
              alt="logo"
              width={150}
              height={90}
            />
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
      </div>
      <div className="about-1">
        <h1 className="about-text">About Farm to Fork</h1>
        <p className="about-text">
          Farm to Fork is a web application that connects farmers and students
          to provide fresh and healthy food. It also provides a platform for
          students to join the community and learn about farming and
          agriculture.
        </p>
      </div>
      <div className="about-2">
        <h1 className="about-text">Our Mission</h1>
        <p className="about-text">
          Our mission is to provide fresh and healthy food to students and
          educate them about farming and agriculture.
        </p>
      </div>
      <div className="about-3">
        <h1 className="about-text">Our Vision</h1>
        <p className="about-text">
          Our vision is to create a community of students and farmers and
          provide a platform for them to connect and share knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
