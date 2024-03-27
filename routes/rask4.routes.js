const express = require("express");
const { secureApi } = require("../controllers/task4");
const { Auth } = require("../middleware/userAuth");
const task4Router = express.Router();

task4Router.get("/task4securedApi", Auth, secureApi);

module.exports = { task4Router };
