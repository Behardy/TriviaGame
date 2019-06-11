"use strict"

const express = require("express");
const score = express.Router();
const pool = require("./connection");

function getScores(res) {
    pool
        .query("select * from scores ")
        .then(result => res.json(result.rows));
}

score.get("/scores",(req,res)=>{
    getScores(res);
});
score.post("/scores",(req,res)=>{
    pool.query("insert into scores()")

    .then(()=>{
        getScores(res);
    });
});