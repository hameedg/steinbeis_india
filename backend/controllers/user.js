const User = require("../models/User");

exports.registerUser = async (req, res) => {
  try {
    const { name, age, gender, dob, bankBalance } = req.body;
    const user = new User({ name, age, gender, dob, bankBalance });
    await user.save();
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    if (
      error.code === 11000 &&
      error.keyPattern &&
      error.keyPattern.name === 1
    ) {
      res.status(400).json({ message: "Name must be unique" });
    } else {
      res.status(500).json({
        success: false,
        message: "this is not happening",
      });
    }
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
