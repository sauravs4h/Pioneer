const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

//importing connecton of Db
const { connection } = require("./config/db");

const { userRouter } = require("./routes/User.routes");
const { task2Router } = require("./routes/task2.routes");
const { task4Router } = require("./routes/rask4.routes");

app.get("/", (req, res) => {
  res.json({ message: "base api" });
});

app.use("/user", userRouter);
app.use("/task2", task2Router);
app.use("/task4",task4Router);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected with db");
    console.log("running on port 8080");
  } catch (error) {
    console.log(error);
  }
});
