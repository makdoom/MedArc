const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// Register route
router.route("/register").post(register);

// Login route
router.route("/login").post(login);

// forgot password route
router.route("/forgot-password").post(forgotPassword);

// reset password route
router.route("/reset-password/:token").post(resetPassword);

module.exports = router;
