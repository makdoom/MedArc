const User = require("../models/User");
const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

// Register controller
exports.register = async (req, res, next) => {
  const { fullName, mobile, email, password } = req.body;
  try {
    // checking user exists or not
    const isExists = await User.findOne({ email });
    if (isExists)
      return next(new ErrorResponse("This email is already in use", 409));

    // Creating new user
    const user = await User.create({ fullName, mobile, email, password });
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.testing = async (req, res, next) => {
  res.status(200).json({ status: 200, message: "success" });
};

// Login Controller
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // check for email and password
  if (!email || !password)
    return next(new ErrorResponse("Please provide all the fields", 400));

  try {
    // check for user exist or not
    const user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(401).json({
        success: false,
        error: { email: "You have entered an invalid email" },
      });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(401).json({
        success: false,
        error: { password: "Your password is invalid, please try again" },
      });

    sendToken(user, 200, res);
    // res.status(200).json({ success: true, token: "hdajsfhdkjasfhueyruiyeitu" });
  } catch (error) {
    next(error);
  }
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({
        success: false,
        error: { email: "This Email doesn't exist" },
      });

    const resetToken = user.getResetPasswordToken();

    // saving user to db
    await user.save();

    // creating url
    const resetURL = `http://localhost:3000/reset-password/${resetToken}`;

    // message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>

      <a href=${resetURL} clicktracking=off>${resetURL}<a/>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({
        success: true,
        message: "Password reset link has been sent to your email",
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
  const { password } = req.body;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Invalid reset token please try again later",
      });

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    res
      .status(201)
      .json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    next(error);
  }
};

// Assigned token
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
