const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const axios = require('axios');
const port = 3000;

app.use(express.urlencoded({ extended: true }));

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


// MongoDB Schema
const User = mongoose.model('user', userSchema);


app.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        res.status(200).json({ message: "Successful" });
    } else {
        res.status(400).json({ message: "Failed" });
    }
});


app.post('/api/signup', async (req, res) => {
    const {name, username, email, password} = req.body;
    const user = await User.findOne({username});
    if(user){
        res.json("username exists", 400);
    }
    user = await User.findOne({email});
    if(user){
        res.json("email exists", 400);
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
            Spiritual:0,
        });

        await newUser.save();
    }
})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
