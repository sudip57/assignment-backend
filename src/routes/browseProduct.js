const express = require("express");

const {
  getAllProducts,
  getProductsByCategory
} = require("../controllers/productController");

const router = express.Router();

router.get("/", async (req, res) => {

  const cursor = req.query.cursor || null;
  const limit = Number(req.query.limit) || 20;

  const data = await getAllProducts(
    cursor,
    limit
  );

  res.render("products", {
    products: data.products,
    hasMore: data.hasMore,
    nextCursor: data.nextCursor,
    currentCategory:null,
  });

});

router.get("/category/:category", async (req, res) => {

  const cursor = req.query.cursor || null;
  const limit = Number(req.query.limit) || 20;

  const { category } = req.params;

  const data = await getProductsByCategory(
    category.toLowerCase(),
    cursor,
    limit
  );

  res.render("products", {
    products: data.products,
    hasMore: data.hasMore,
    nextCursor: data.nextCursor,
    currentCategory:category,
  });

});

module.exports = router;