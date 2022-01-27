const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

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
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return next(new ErrorResponse("Email doesn't exist", 404));

    const resetToken = user.getResetPasswordToken();

    // saving user to db
    await user.save();

    // creating url
    const resetURL = `http://localhost:3000/password-reset/${resetToken}`;

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

      res.status(200).json({ success: true, data: "Email sent successfully" });
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
exports.resetPassword = (req, res, next) => {
  res.send(`Reset password routes ${req.params.token}`);
  // console.log("reset");
};

// Assigned token
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
