const express = require("express");
const router = express.Router();
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const {
  getAll,
  createCategory,
  categoryById,
  readCategory,
  updateCategory,
  removeCategory
} = require("../controllers/category");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", readCategory);
router.post(
  "/category/create/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  createCategory
);
router.put(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  updateCategory
);
router.delete(
  "/category/:categoryId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  removeCategory
);
router.get("/categories", getAll);

router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;
