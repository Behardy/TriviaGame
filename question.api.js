"use strict"

const express = require("express");
const question = express.Router();
const pool = require("./connection");

function getQuestions(res){
    pool
        .query("select * from questions ")
        .then(result => res.json(result.rows));
}

question.get("/questions",(req,res)=>{
    getQuestions(res);
});