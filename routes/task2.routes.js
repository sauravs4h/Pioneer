const express=require("express");
const { getDataFromApi } = require("../controllers/task2");
const task2Router= express.Router();

task2Router.get("/task2GetData",getDataFromApi);

module.exports={task2Router}