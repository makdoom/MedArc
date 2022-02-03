const User = require("../models/PatientSchema");
const Doctor = require("../models/DoctorSchema");
const Patient = require("../models/PatientSchema");
const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");

// Register controller
exports.register = async (req, res, next) => {
  const { userType } = req.body;

  try {
    if (userType === "Patient") {
      // for patient user
      const { fullName, mobile, email, password } = req.body;

      // checking patient already exist or not
      const isExists =
        (await Patient.findOne({ email })) || (await Doctor.findOne({ email }));
      if (isExists)
        return next(new ErrorResponse("This email is already in use", 409));

      // Creating new user
      const user = await Patient.create({ fullName, mobile, email, password });
      sendToken(user, 201, res);
    } else {
      // For doctor user
      const { clinicName, npiNumber, email, password } = req.body;

      // checking if doctor exist
      const isExists = await Doctor.findOne({ email });
      if (isExists)
        return next(new ErrorResponse("This email is already in use", 409));

      // Creating new doctor user
      const user = await Doctor.create({
        clinicName,
        npiNumber,
        email,
        password,
      });
      sendToken(user, 201, res);
    }
  } catch (error) {
    next(error);
  }
};

// Login Controller
exports.login = async (req, res, next) => {
  const { userType, email, password } = req.body;

  // Checking for empty field
  if (!email || !password)
    return next(new ErrorResponse("Please provide all the fields", 400));

  try {
    if (userType === "Patient") {
      // check for user exist or not
      const user = await Patient.findOne({ email }).select("+password");

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
    } else {
      // check for user exist or not
      const user = await Doctor.findOne({ email }).select("+password");

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
    }
  } catch (error) {
    next(error);
  }

  // check for email and password

  try {
    // res.status(200).json({ success: true, token: "hdajsfhdkjasfhueyruiyeitu" });
  } catch (error) {}
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
  const { userType, email } = req.body;
  console.log(userType, email);
  try {
    let user;
    if (userType === "Patient") {
      user = await Patient.findOne({ email });
    } else {
      user = await Doctor.findOne({ email });
    }

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
