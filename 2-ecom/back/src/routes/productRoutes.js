const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  getRelated,
  listCategories,
  listSearch,
  listBySearch,
  photo
} = require("../controllers/productController");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);

router.post("/product/new/:userId", requireSignIn, isAdmin, isAuth, create);

//productId for which product userId is for admin
router.delete(
  "/product/:productId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  remove
);

router.put(
  "/product/:productId/:userId",
  requireSignIn,
  isAdmin,
  isAuth,
  update
);

router.get("/products", list);
//get all except productId  all categorysub
router.get("/products/related/:productId", getRelated);
//return all categories based on products
router.get("/products/categories", listCategories);
router.get("/products/search", listSearch);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);

router.param("userId", userById);
router.param("productId", productById);
module.exports = router;
