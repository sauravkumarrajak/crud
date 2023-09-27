const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
// connection to database
const connectToDb = require("./config/db.js");

// Express middleware
app.use(express.json()); //parsing json
app.use(express.urlencoded({ extended: true })); // parsing url encodded value

app.use(cors());

// init conection to db

connectToDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
