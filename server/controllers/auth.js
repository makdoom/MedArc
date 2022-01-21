// Register controller
exports.register = (req, res, next) => {
  res.send("Register routes");
};

// Login Controller
exports.login = (req, res, next) => {
  res.send("Login routes");
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
