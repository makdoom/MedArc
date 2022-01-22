const jwt = require("jsonwebtoken");
const ErrorResponse = require("./error");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // !token exist
  if (!token)
    return next(new ErrorResponse("Not authorized to access this route", 401));

  // token verify
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await User.findById(decode.id);
    if (!user)
      return next(new ErrorResponse("No user found with this id", 404));

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
