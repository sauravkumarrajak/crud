const mongoose = require("mongoose");

const connectionString = process.env.connectToDb || "mongodb://localhost:27017";

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(connectionString);
    console.log(`Connected to DB: ${conn}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectToDb;
