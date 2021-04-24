const Category = require("../models/category");
const { errorHandler } = require("../utils/dbErrorHandler");

exports.readCategory = (req, res) => {
  return res.json(req.category);
};

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "Category does not exist"
      });
    }
    req.category = category;
    next();
  });
};

exports.createCategory = (req, res) => {
  const category = new Category(req.body);
  category.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    res.json({ data });
  });
};

exports.updateCategory = (req, res) => {
  //we have category in request
  const category = req.category;
  category.name = req.body.name;
  category.save((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    res.json(data);
  });
};

exports.removeCategory = (req, res) => {
  const category = req.category;
  category.remove((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    res.json({
      message: "Category deleted"
    });
  });
  /*
  Product.find({ category }).exec((err, data) => {
    if (data.length >= 1) {
      return res.status(400).json({
        message: `Sorry. You cant delete ${category.name}. It has ${data.length} associated products.`
      });
    } else {
      category.remove((err, data) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err)
          });
        }
        res.json({
          message: "Category deleted"
        });
      });
    }
  });
  */
};

exports.getAll = (req, res) => {
  Category.find().exec((error, data) => {
    if (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }
    res.json(data);
  });
};
