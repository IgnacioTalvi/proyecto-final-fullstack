const express = require('express');
const productsController = require("../controllers/products.controller");
const router = express.Router();

router.get("/",productsController.getAllProducts);
router.post("/", productsController.createProduct);
router.delete("/", productsController.deleteProduct);

module.exports = router;