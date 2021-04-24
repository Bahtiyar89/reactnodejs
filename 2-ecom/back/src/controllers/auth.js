const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt"); // authoriz check
const { errorHandler } = require("../utils/dbErrorHandler");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((error, user) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please sign up"
      });
    }
    //if user found make sure email and password match
    //CREATE authenticate method in user model
    if (!user.authonticate(password)) {
      return res.status(401).json({
        error: "Email and password dont match"
      });
    }
    //generate a signed token with user id and secred
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //persist the token as 't' in cookie  with expired date
    res.cookie("t", token, { expire: new Date() + 9999 });
    //return response with user and token to frontend cliend
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "signout success" });
};

//protecting route
exports.requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  //we add auth as user property
  userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "access denied"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource! access denied"
    });
  }
  next();
};
