import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bg from '../assets/images/checklist.jpg';

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
  }, []);

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
      if (severity === 3) numberOfTasks = 5;
      else if (severity === 2) numberOfTasks = 3;
      else if (severity === 1) numberOfTasks = 2;
      toDoList[topic] = tasks
        .sort(() => Math.random() - 0.5)
        .slice(0, numberOfTasks)
        .map((task) => ({ task, completed: false }));
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
    <div className="relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
      <Header />
      <div className="py-8 px-4 lg:px-24 bg-white bg-opacity-80">
        <h2 className="text-2xl font-semibold mb-4">To-Do Lists for the Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weeklyToDoLists.map((dailyList, index) => (
            <div key={index} className="border border-gray-200 rounded p-4">
              <h3 className="text-lg font-semibold mb-2">{`Day ${index + 1}: ${formatDate(
                new Date(Date.now() + index * 24 * 60 * 60 * 1000)
              )}`}</h3>
              <ul>
                {Object.entries(dailyList).map(([topic, tasks], i) => (
                  <li key={i} className="mb-2">
                    <strong>{topic}</strong>
                    <ul className="ml-4">
                      {tasks.map((task, j) => (
                        <li
                          key={j}
                          className={`flex items-center ${
                            task.completed ? "line-through text-gray-500" : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompletion(index, i, j)}
                            className="mr-2"
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
      <Footer />
    </div>
  );
};

export default Checklist;
