const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://aakashkumar-user_14:aakash14@cluster0.pqmb3t7.mongodb.net/?appName=Cluster0")

.then(() => console.log("MongoDB Connected Successfully!"))

.catch((err) => console.log(err));

const projectSchema = new mongoose.Schema({

    title: String,

    description: String,

    github: String

});

const Project = mongoose.model("Project", projectSchema);

const contactSchema = new mongoose.Schema({

    name: String,

    email: String,

    message: String

});

const Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {

    res.send("Backend is Running 🚀");

});

app.get("/projects", async (req, res) => {

    const projects = await Project.find();

    res.json(projects);

});

app.get("/add-project", async (req, res) => {

    const newProject = new Project({

        title: "Portfolio Website",

        description: "Full Stack Portfolio Project",

        github: "https://github.com/"

    });

    await newProject.save();

    res.send("Project Added!");

});

app.post("/contact", async (req, res) => {

    const newContact = new Contact(req.body);

    await newContact.save();

    res.send("Message Saved!");

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});
