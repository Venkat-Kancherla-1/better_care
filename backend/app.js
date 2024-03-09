const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Venkat:12344321@cluster0.kam6qns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
    username: String,
    name:String,
    password:String,
    email:String,
    emotional:Number,
    mental:Number,
    physical:Number,
    social:Number,
    practical:Number,
    Spiritual:Number,
});

const journalSchema = new mongoose.Schema({
    username:String,
    date:String,
    tag:String,
    description:String
})


// MongoDB Schema
const User = mongoose.model('user', userSchema);
const Journal = mongoose.model('journal', journalSchema);


app.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        const accessToken = jwt.sign({ username }, "your-secret-key");
        console.log(accessToken);
        res.status(200).json({ accessToken: accessToken });
    } else {
        res.status(400).json({ message: "Failed" });
    }
});


app.post('/api/signup', async (req, res) => {
    const {name, username, email, password} = req.body;
    let user = await User.findOne({username});
    if(user){
        res.json("username exists", 400).end();

    }
    user = await User.findOne({email});
    if(user){
        res.json("email exists", 400).end();
    }
    else {
        const newUser = new User({
            name: name,
            username: username,
            email: email,
            password:password,
            emotional:0,
            mental:0,
            physical:0,
            social:0,
            practical:0,
            spiritual:0,
        });

        await newUser.save();
    }
})

app.get('api/journals/username', async (req, res) => {
    const {username} = req.body;
    const posts = await Journal.find({ username:username });

    res.json({ status: "success", data: posts });
})

app.post('api/journals/username', async (req, res) => {
    const {username, date, tag, description} = req.body;
    const newJournal = new Journal({
        username:username,
        date:date,
        tag:tag,
        description:description,
    })

    await newJournal.save();
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
