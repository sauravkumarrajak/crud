// design user schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Requiered"],
    trim: true,
    maxLength: [20, "Name Must Be Less Than 20 Char"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
