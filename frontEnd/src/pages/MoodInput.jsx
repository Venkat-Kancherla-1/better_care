// MoodInput.jsx

import React, { useState } from "react";
import axios from "axios";

const MoodInput = ({ username }) => {
  const [selectedMood, setSelectedMood] = useState(0);

  const handleMoodSubmit = async (date) => {
    try {
      username= localStorage.getItem("username");
      console.log(username);
      await axios.post("http://localhost:5000/api/mood", { username, date, selectedMood });
      alert("Mood updated successfully!");
    } catch (error) {
      console.error("Error updating mood:", error);
      alert("Error updating mood. Please try again.");
    }
  };

  return (
    <div>
      <h2>Input Mood for the Day</h2>
      <label>Select Mood:</label>
      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(parseInt(e.target.value))}
      >
        <option value={0}>-</option>
        <option value={1}>:(</option>
        <option value={2}>:|</option>
        <option value={3}>:)</option>
      </select>
      <button onClick={() => handleMoodSubmit("2024-12-13")}>
        Update Mood
      </button>
    </div>
  );
};

export default MoodInput;
