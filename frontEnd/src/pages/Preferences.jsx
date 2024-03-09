import React, { useState, useEffect } from "react";

import axios from "axios";

const Preferences = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (value) => {
    const newSelected = [...selected];
    if (newSelected.includes(value)) {
      const index = newSelected.indexOf(value);
      newSelected.splice(index, 1);
    } else {
      newSelected[value] = newSelected[value] === 1 ? 0 : 1;
    }
    setSelected(newSelected);
  };

  const handleNext = async () => {
    if (selected.length >= 2) {
      const formattedSelected = {};
      selected.forEach((item, index) => {
        if (item === 1) {
          switch (index) {
            case 1:
              formattedSelected["emotional"] = item;
              break;
            case 2:
              formattedSelected["mental"] = item;
              break;
            case 3:
              formattedSelected["physical"] = item;
              break;
            case 4:
              formattedSelected["social"] = item;
              break;
            case 5:
              formattedSelected["practical"] = item;
              break;
            case 6:
              formattedSelected["spiritual"] = item;
              break;
            default:
              break;
          }
        }
      });
      const username = localStorage.getItem("username");
      console.log(username, formattedSelected);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/preferences",
          { username, formattedSelected }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please select at least 2 options before continuing.");
    }
  };

  return (
    <>
      <div>
        <h1>What kind of Self-Care Activities are you interested in? </h1>
        <div>
          <div onClick={() => handleClick(1)}>Emotional</div>
          <div onClick={() => handleClick(2)}>Mental</div>
          <div onClick={() => handleClick(3)}>Physical</div>
          <div onClick={() => handleClick(4)}>Social</div>
          <div onClick={() => handleClick(5)}>Practical</div>
          <div onClick={() => handleClick(6)}>Spiritual</div>
          <button onClick={handleNext}>Next➡️</button>
        </div>
      </div>
    </>
  );
};

export default Preferences;
