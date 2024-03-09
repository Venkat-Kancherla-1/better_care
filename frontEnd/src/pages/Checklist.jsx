import React, { useState, useEffect } from "react";
import "./Checklist.css"; // Import CSS file for styling

// Define predefined tasks for each topic
const tasksByTopic = {
  emotional: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
  spiritual: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
  physical: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
  mental: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
  practical: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
  social: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
  ],
};

// Define selected topics
const selectedTopics = [
  "emotional",
  "spiritual",
  "physical",
  //   "mental",
  //   "practical",
  //   "social",
];
const severity = 2;
const Checklist = () => {
  const [weeklyToDoLists, setWeeklyToDoLists] = useState([]);

  useEffect(() => {
    generateWeeklyToDoLists();
  }, []); // Run once on component mount

  const generateWeeklyToDoLists = () => {
    const weeklyToDoLists = [];
    for (let i = 0; i < 7; i++) {
      const topicsForDay = selectedTopics;
      const toDoList = generateToDoList(topicsForDay);
      weeklyToDoLists.push(toDoList);
    }
    setWeeklyToDoLists(weeklyToDoLists);
  };

  const generateToDoList = (topics) => {
    const toDoList = {};
    topics.forEach((topic) => {
      const tasks = tasksByTopic[topic];
      let numberOfTasks = 0;
      // Randomly select number of tasks based on severity
      if (severity === 3) numberOfTasks = 5;
      else if (severity === 2) numberOfTasks = 3;
      else if (severity === 1) numberOfTasks = 2;
      // Randomly select tasks from the topic
      toDoList[topic] = tasks
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfTasks)
        .map((task) => ({ task, completed: false })); // Add completed property
    });
    return toDoList;
  };

  const toggleCompletion = (dayIndex, topicIndex, taskIndex) => {
    const updatedLists = [...weeklyToDoLists];
    const topicKey = selectedTopics[topicIndex];
    if (!updatedLists[dayIndex][topicKey]) {
      console.log("Error: Tasks array is undefined.");
      return;
    }
    updatedLists[dayIndex][topicKey][taskIndex].completed =
      !updatedLists[dayIndex][topicKey][taskIndex].completed;
    setWeeklyToDoLists(updatedLists);
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="checklist">
      <h2>To-Do Lists for the Week</h2>
      <div className="weekly-to-do-lists">
        {weeklyToDoLists.map((dailyList, index) => (
          <div key={index} className="daily-to-do-list">
            <h3>{`Day ${index + 1}: ${formatDate(
              new Date(Date.now() + index * 24 * 60 * 60 * 1000)
            )}`}</h3>
            <ul>
              {Object.entries(dailyList).map(([topic, tasks], i) => (
                <li key={i}>
                  <strong>{topic}</strong>
                  <ul>
                    {tasks.map((task, j) => (
                      <li
                        key={j}
                        style={{
                          textDecoration: task.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleCompletion(index, i, j)}
                        />
                        {task.task}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;

{
  /*
    const generateWeeklyToDoLists = () => {
  const storedLists = JSON.parse(localStorage.getItem("weeklyToDoLists"));
  if (storedLists) {
    setWeeklyToDoLists(storedLists);
  } else {
    const newLists = [];
    for (let i = 0; i < 7; i++) {
      const topicsForDay = selectedTopics;
      const toDoList = generateToDoList(topicsForDay);
      newLists.push(toDoList);
    }
    setWeeklyToDoLists(newLists);
    // Store the newly generated lists in local storage
    localStorage.setItem("weeklyToDoLists", JSON.stringify(newLists));
  }
};

 */
}
