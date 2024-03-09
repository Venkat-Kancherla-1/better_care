import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MoodTracker.css";

const MoodTracker = ({ username }) => {
  const [moodData, setMoodData] = useState([]);

  // Fetch mood data from the database on component mount
  useEffect(() => {
    const fetchMoodData = async () => {
      try {
        username= localStorage.getItem("username");
        const response = await axios.get(`http://localhost:5000/api/mood/${username}`);
        const receivedData = response.data.moodData || [];
        const sortedMoodData = receivedData.sort((a, b) => {
          if (a.year !== b.year) {
            return a.year - b.year;
          }
          return a.month - b.month;
        });

        console.log(response.moodData);
        console.log("Received Data:",sortedMoodData); 
        setMoodData(receivedData); // Ensure moodData is not undefined
      } catch (error) {
        console.error("Error fetching mood data:", error);
        setMoodData([]); // Set an empty array in case of an error
      }
    };

    fetchMoodData();
  }, [username]);

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker for the Year</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            {[...Array(31).keys()].map((date) => (
              <th key={date}>{date + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {moodData.map((monthData) => (
            <tr key={monthData._id}>
              <td>
                {new Date(monthData.year, monthData.month - 1, 1).toLocaleString("default", {
                  month: "short",
                })}
              </td>
              {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => {
                const dayData = monthData.data.find((d) => d.day === day);
                const mood = dayData ? dayData.mood : 0;

                return (
                  <td
                    key={day}
                    className={`mood-cell ${getMoodColor(mood)}`}
                  >
                    {mood}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to get mood color based on mood value
const getMoodColor = (mood) => {
  switch (mood) {
    case 0:
      return "sad";
    case 1:
      return "neutral";
    case 2:
      return "average";
    case 3:
      return "happy";
    default:
      return "";
  }
};

export default MoodTracker;
