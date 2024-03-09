import React from "react";

const HomeDS = () => {
  return (
    <>
      <div className="ds-home">
        <nav className="ds-navbar">
          <h1>Farm to Fork</h1>
          <ul className="ds-nav-items">
            <li onClick={(e) => setSelectedNav(0)}>Farmer</li>
            <li onClick={(e) => setSelectedNav(1)}>Admin</li>
            <li onClick={(e) => setSelectedNav(2)}>View Orders</li>
            <li onClick={(e) => setSelectedNav(3)}>Logout</li>
          </ul>
        </nav>
        <h1>Dining Service Home</h1>
        <p>Welcome to the Dining Service Home Page</p>
        {selectedNav === 0 && (
          <div className="ds-farmer">
            <h2>Farmer</h2>
            <div className="ds-post">
              <h3>Post Title</h3>
              <p>Bulk Price</p>
              <p>Retail Price</p>
              <p>Quantity</p>
              <button>Buy</button>
            </div>
          </div>
        )}
        {selectedNav === 1 && (
          <div className="ds-admin">
            <h2>Admin</h2>
            <div className="ds-admin-post">
              <h3>Post Title</h3>
              <p>Bulk Price</p>
              <p>Retail Price</p>
              <p>Quantity</p>
            </div>
          </div>
        )}
        {selectedNav === 2 && (
          <div className="ds-view-orders">
            <h2>View Orders</h2>
            <div className="ds-order">
              <h3>Order Title</h3>
              <p>Order Description</p>
              <p>Price</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeDS;
