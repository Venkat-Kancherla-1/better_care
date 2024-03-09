import React, { useState } from "react";
import "./MoodTracker.css";

const MoodTracker = () => {
  // Generate mood data for the year (assuming you have mood data stored somewhere)
  const [moodData, setMoodData] = useState(generateMoodData());

  // Function to generate mock mood data for the year
  function generateMoodData() {
    const months = [];
    for (let month = 0; month < 12; month++) {
      const monthMoods = [];
      const daysInMonth = new Date(2024, month + 1, 0).getDate();
      for (let day = 0; day < daysInMonth; day++) {
        // Initialize mood for each day as neutral (0 - white, no specific mood)
        monthMoods.push(0);
      }
      months.push(monthMoods);
    }
    return months;
  }

  // Function to handle mood selection for a specific day
  const handleMoodSelection = (monthIndex, dayIndex, selectedMood) => {
    const updatedMoodData = [...moodData];
    updatedMoodData[monthIndex][dayIndex] = selectedMood;
    setMoodData(updatedMoodData);
  };

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
          {moodData.map((monthMoods, monthIndex) => (
            <tr key={monthIndex}>
              <td>
                {new Date(2024, monthIndex, 1).toLocaleString("default", {
                  month: "short",
                })}
              </td>
              {monthMoods.map((mood, dayIndex) => (
                <td
                  key={dayIndex}
                  className={`mood-cell ${getMoodColor(mood)}`}
                >
                  <select
                    className={`mood-select`}
                    value={mood}
                    onChange={(e) =>
                      handleMoodSelection(
                        monthIndex,
                        dayIndex,
                        parseInt(e.target.value)
                      )
                    }
                  >
                    <option value={0}>-</option>
                    <option value={1}>:(</option>
                    <option value={2}>:|</option>
                    <option value={3}>:)</option>
                  </select>
                </td>
              ))}
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
