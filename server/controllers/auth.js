const User = require("../models/User");

// Register controller
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    console.log(user);
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, erro: error.message });
  }
};

// Login Controller
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // check for email and password
  if (!email || !password) {
    res
      .status(400)
      .json({ status: false, error: "Please provide all the fields" });
  }
  // check for user exist or not
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res
        .status(404)
        .json({ success: false, error: "Invalid email or password" });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      res.status(404).json({ success: false, error: "Invalid Password" });

    res.status(200).json({ success: true, token: "hdajsfhdkjasfhueyruiyeitu" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Forgot password
exports.forgotPassword = (req, res, next) => {
  res.send("Forgot password routes");
};

// Reset password
exports.resetPassword = (req, res, next) => {
  res.send(`Reset password routes ${req.params.token}`);
  // console.log("reset");
};
