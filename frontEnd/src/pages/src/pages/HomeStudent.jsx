import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/HomeStudent.css";
import logo from "../assets/farm-to-fork-high-resolution-logo-removebg-preview.png";

const HomeStudent = () => {
  const [data, setData] = useState([]);
  const [inputQuantity, setInputQuantity] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/students/buy")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5000/api/buy", {});
  });
  console.log(data._id, data.item, data.name, inputQuantity);
  const [selectedNav, setSelectedNav] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [contact, setContact] = useState("");
  const [studentType, setStudentType] = useState("");

  const [joinUsReason, setJoinUsReason] = useState("");

  const handleRadio = (e) => {
    setStudentType(e.target.value);
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("Student submitted:", studentName, regNo, contact, studentType);
  };

  const handleButtonClick = (item) => {
    console.log("Button clicked. Item:", item);
    console.log("Quantity:", inputQuantity);
  };

  const handleJoinUsSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Join Us submitted:",
      studentName,
      regNo,
      contact,
      studentType,
      joinUsReason
    );
  };

  const handleLogoutConfirm = () => {
    // Implement logout confirmation logic
    console.log("Logout confirmed");
  };

  return (
    <>
      <div className="student-home">
        <nav className="student-navbar">
          <h1>
            <a href="/HomeStudent">
              <img src={logo} width={80} />
            </a>
          </h1>
          <ul className="student-nav-items">
            <li onClick={() => setSelectedNav(0)}>Buy</li>
            <li onClick={() => setSelectedNav(1)}>View Orders</li>
            <li onClick={() => setSelectedNav(2)}>Join Us</li>
            <li onClick={() => setSelectedNav(3)}>Logout</li>
          </ul>
        </nav>

        {selectedNav === 0 && (
          <div className="student-buy">
            <p className="text-welcome">
              Welcome <strong className="username">Username</strong>
            </p>
            <h3>Buy Now</h3>
            {data.map((item) => (
              <div className="student-buy-item" key={item._id}>
                <h2>{item.item}</h2>
                <p>{item.name}</p>
                <p>
                  {" "}
                  <strong>Price :</strong>
                  {item.normalPrice} / kg
                </p>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input-quantity"
                  onChange={(e) => setInputQuantity(e.target.value)}
                />
                <button onClick={handleButtonClick}>Buy</button>
              </div>
            ))}
          </div>
        )}
        {selectedNav === 1 && <div className="student-view-orders"></div>}
        {selectedNav === 2 && (
          <div className="student-join-us">
            <h2>Join Us</h2>
            <form onSubmit={handleJoinUsSubmit}>
              <label>
                Student Name:
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </label>
              <label>
                Registration Number:
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                />
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
              <label>
                <input
                  type="radio"
                  value="Hosteller"
                  checked={studentType === "Hosteller"}
                  onChange={handleRadio}
                />
                Hosteller
              </label>
              <label>
                <input
                  type="radio"
                  value="Day scholar"
                  checked={studentType === "PG"}
                  onChange={handleRadio}
                />
                Day scholar
              </label>
              <button type="submit" onClick={handleStudentSubmit}>
                Join Us
              </button>
            </form>
          </div>
        )}
        {selectedNav === 3 && (
          <div className="student-logout">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogoutConfirm}>Yes</button>
            <button>No</button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeStudent;
