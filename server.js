"use strict"
const express = require("express");
const app = express();
const questions = require("./question.api");
const scores = require("./scores.api")

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", questions, scores);

const port = 3001;
app.listen(port,()=> console.log(`Server is running on Port: ${port}`));