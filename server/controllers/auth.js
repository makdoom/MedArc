const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

// Register controller
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    sendToken(user, 201, res);
    // res.status(201).json({ success: true, user });
  } catch (error) {
    next(error);
  }
};

// Login Controller
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // check for email and password
  if (!email || !password)
    return next(new ErrorResponse("Please provide all the fields", 400));

  // check for user exist or not
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorResponse("Invalid email or password", 401));

    const isMatch = await user.matchPassword(password);

    if (!isMatch) return next(new ErrorResponse("Invalid password", 401));

    sendToken(user, 200, res);
    // res.status(200).json({ success: true, token: "hdajsfhdkjasfhueyruiyeitu" });
  } catch (error) {
    next(error);
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

// Assigned token
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
