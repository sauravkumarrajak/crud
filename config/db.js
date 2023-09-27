const mongoose = require("mongoose");

const connectionString =
  process.env.MONGO_URI || "mongodb://localhost:27017/sigmaone";

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(connectionString);
    console.log(`Connected to DB: ${conn}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDb;
