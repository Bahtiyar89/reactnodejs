exports.userSignupValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty();
  req
    .check("email", "Email must be between 3 and 32")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({ min: 3, max: 32 });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 3 })
    .withMessage("password must contain at least 3 charackters")
    .matches(/\d/) // at least must have 1 digit
    .withMessage("Password must contain a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
