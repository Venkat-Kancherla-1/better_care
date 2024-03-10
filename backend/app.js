const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const app = express();
const axios = require("axios");
const history = require("history");
const cors = require("cors");
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Venkat:12344321@cluster0.kam6qns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
  }
);

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  password: String,
  email: String,
  emotional: Number,
  mental: Number,
  physical: Number,
  social: Number,
  practical: Number,
  spiritual: Number,
  moods: [
    {
      month: Number, // 0-based index (0 for January, 1 for February, etc.)
      year: Number, // 4-digit year
      data: [
        {
          day: Number, // 1-based index (1 for the first day of the month)
          mood: Number, // 0 for neutral, 1 for :(, 2 for :|, 3 for :)
        },
      ],
    },
  ],
});

const journalSchema = new mongoose.Schema({
  username: String,
  date: String,
  tag: String,
  description: String,
});

const checklistSchema = new mongoose.Schema({
  username: String,
  weeklyToDoLists: [
    {
      topics: [String], // Array of selected topics for the day
      toDoList: [
        {
          topic: String, // Topic name
          tasks: [
            {
              task: String, // Task name
              completed: Boolean, // Task completion status
            },
          ],
        },
      ],
    },
  ],
});

const Checklist = mongoose.model("checklist", checklistSchema);

// MongoDB Schema
const User = mongoose.model("user", userSchema);
const Journal = mongoose.model("journal", journalSchema);

app.post("/api/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    const accessToken = jwt.sign({ username }, "your-secret-key");
    console.log(accessToken, username);
    res.status(200).json({ accessToken: accessToken, username: username });
  } else {
    res.status(400).json({ message: "Failed" });
  }
});

app.post("/api/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  let user = await User.findOne({ username });
  if (user) {
    res.json("username exists", 400).end();
  }
  user = await User.findOne({ email });
  if (user) {
    res.json("email exists", 400).end();
  } else {
    const newUser = new User({
      name: name,
      username: username,
      email: email,
      password: password,
      emotional: 0,
      mental: 0,
      physical: 0,
      social: 0,
      practical: 0,
      spiritual: 0,
    });

    const newChecklist = new Checklist({
      username: username,
    });

    await newUser.save();
    await newChecklist.save();
    res.json("success", 200).end();
  }
});

// Assuming your Express app is defined as 'app'
app.get("/api/journals/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  const posts = await Journal.find({ username });

  res.json({ status: "success", data: posts });
});

app.post("/api/journals/:username", async (req, res) => {
  const { username, date, tag, description } = req.body;
  const newJournal = new Journal({
    username,
    date,
    tag,
    description,
  });

  await newJournal.save();
  res.json({ status: "success", data: newJournal });
});

app.post("/api/mood", async (req, res) => {
  console.log("executed");
  try {
    const { username, date, selectedMood } = req.body;
    console.log(username, date, selectedMood);

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send(`User not found for username: ${username}`);
    }

    // Find the month in user's mood data, create if it doesn't exist
    const year = new Date(date).getFullYear();
    const monthIndex = new Date(date).getMonth() + 1;
    console.log(year, monthIndex);
    const monthYearData = user.moods.find(
      (item) => item.month === monthIndex && item.year === year
    );

    if (!monthYearData) {
      // If the month doesn't exist, create a new entry
      user.moods.push({
        month: monthIndex,
        year,
        data: [{ day: new Date(date).getDate(), mood: selectedMood }],
      });
    } else {
      // If the month exists, find the day and update the mood
      const dayIndex =
        monthYearData.data.findIndex(
          (item) => item.day === new Date(date).getDate()
        ) + 1;

      if (dayIndex !== -1) {
        monthYearData.data[dayIndex].mood = selectedMood;
      } else {
        // If the day doesn't exist, create a new entry for the day
        monthYearData.data.push({
          day: new Date(date).getDate(),
          mood: selectedMood,
        });
      }
    }

    // Save the updated user
    await user.save();

    res.status(200).send("Mood updated successfully");
  } catch (error) {
    console.error("Error updating mood:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get(`/api/mood/:username`, async (req, res) => {
  try {
    // Fetch mood data based on the provided username
    console.log(req.params.username);
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res
        .status(404)
        .send(`User not found for username: ${req.params.username}`);
    }

    // Assuming you have a 'moods' array in your user schema
    const moodData = user.moods || [];

    res.status(200).json({ moodData });
  } catch (error) {
    console.error("Error fetching mood data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/preferences", async (req, res) => {
  try {
    const { username, formattedSelected } = req.body;
    console.log("Received data:", formattedSelected);

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update the user preferences
    user.emotional = formattedSelected.emotional || user.emotional;
    user.mental = formattedSelected.mental || user.mental;
    user.physical = formattedSelected.physical || user.physical;
    user.social = formattedSelected.social || user.social;
    user.practical = formattedSelected.practical || user.practical;
    user.spiritual = formattedSelected.spiritual || user.spiritual;

    // Save the updated user
    await user.save();

    res
      .status(200)
      .send(
        "Data received, user updated, and weekly to-do lists generated and stored successfully"
      );
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/checklists/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const checklist = await Checklist.findOne({ username });
    console.log(checklist);

    if (!checklist) {
      return res
        .status(404)
        .send(`Checklist not found for username: ${username}`);
    }

    res.status(200).json({ weeklyToDoLists: checklist.weeklyToDoLists });
  } catch (error) {
    console.error("Error fetching weekly to-do lists:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/checklists", async (req, res) => {
  try {
    const { username, weeklyToDoLists } = req.body;

    const existingChecklist = await Checklist.findOne({ username });

    if (!existingChecklist) {
      return res.status(404).send("Checklist not found for the user");
    }

    // Update existing checklist with the new tasks
    existingChecklist.weeklyToDoLists = weeklyToDoLists;

    // Save the updated checklist to the database
    await existingChecklist.save();

    res.status(200).send("Weekly to-do lists updated successfully");
  } catch (error) {
    console.error("Error updating weekly to-do lists:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
