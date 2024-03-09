import React, { useEffect } from "react";
import axios from "axios";
import "../styles/HomeFarmer.css";
import { useState } from "react";
const HomeFarmer = () => {
  const [selectedNav, setSelectedNav] = useState(0);
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [bulk, setBulk] = useState(0);
  const [retail, setRetail] = useState(0);
  const [allOrders, setAllOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [viewOrders, setViewOrders] = useState([]);
  const token = localStorage.getItem('accessToken');
  const tokenPayload = JSON.parse(atob(token.split('.')[1]));
  const userName = tokenPayload.userName; 
   
  let username = "bruh";
  async function handleFarmerPost(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/farmers/post",
        {
          accessToken: localStorage.getItem("accessToken"),
          item: title,
          quantity: quantity,
          bulkPrice: bulk,
          normalPrice: retail,
        }
      );
      console.log(response);

      if (response.data.status === "exist") {
        localStorage.setItem("accessToken", response.data.accessToken);
        history("/HomeFarmer");
        window.location.reload();
      } else if (response.data.status === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      alert("Wrong details or server error");
      console.error(error);
    }
  }

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/farmers/viewOrders", {
        userName: userName, 
      })
      .then((response) => {
        setViewOrders(response.data.data);
        console.log(response.data.data);
      });
  }, [userName]); 
  
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/farmers/deliveredOrders", {
        userName: userName, 
      })
      .then((response) => {
        console.log(response.data.data);
        setDeliveredOrders(response.data.data);
      });
  }, [userName]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/farmers/allOrders", {
        userName: userName, 
      })
      .then((response) => {
        console.log(response.data.data);
        setAllOrders(response.data.data);
      });
  }, [userName]);
  return (
    <>
      <div className="farmer-home">
        <nav className="farmer-navbar">
          <h1>Farm to Fork</h1>

          <ul className="farmer-nav-items">
            <li onClick={(e) => setSelectedNav(0)}>Add post</li>
            <li onClick={(e) => setSelectedNav(1)}>View posts</li>
            <li onClick={(e) => setSelectedNav(2)}>View Orders</li>
            <li onClick={(e) => setSelectedNav(3)}>Logout</li>
          </ul>
        </nav>
        <h1>Farmer Home</h1>
        <p>Welcome to the Farmer Home Page</p>
        {selectedNav === 0 && (
          <div className="farmer-add-post">
            <h2>Add Post</h2>
            <form onSubmit={handleFarmerPost}>
              <input type="text" value={username} hidden />
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="number"
                placeholder="Quantity(Kgs)"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input
                type="number"
                placeholder="Bulk Price"
                onChange={(e) => setBulk(e.target.value)}
              />
              <input
                type="number"
                placeholder="Retail Price"
                onChange={(e) => setRetail(e.target.value)}
              />

              <button type="submit">Add Post</button>
            </form>
          </div>
        )}
        {selectedNav === 1 && (
          <div className="farmer-view-posts">
            <h2>View Posts</h2>
            {viewOrders.map((order) => (
              <div className="farmer-post" key={order._id}>
                <h3>{order.title}</h3>
                <p>Bulk Price: {order.bulkPrice}</p>
                <p>Retail Price: {order.retailPrice}</p>
                <p>Quantity: {order.quantity}</p>
              </div>
            ))}
          </div>
        )}
        {selectedNav === 2 && (
          <div className="farmer-view-orders">
            <h2>View Orders</h2>
            <div className="farmer-order">
              <h3>Order Title</h3>
              <p>Order Description</p>
              <p>Price</p>
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
        )}
        {selectedNav === 3 && (
          <div className="farmer-logout">
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button>Yes</button>
            <button>No</button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeFarmer;
