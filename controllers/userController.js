const User = require("../model/userModel.js");

exports.home = (req, res) => {
  res.send("Hello World");
};

exports.createUser = async (req, res) => {
  // extract info
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });
    res.status(200).json({
      success: true,
      message: "User Created SuccessFully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length == 0) {
      throw new Error("no data exist");
    }
    res.status(201).json({
      success: true,
      message: "data fetched succefully",
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "user updated succefully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "Deleted SuccessFully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
