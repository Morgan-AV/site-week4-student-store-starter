const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// get all the Products
router.get("/", productController.getAllProducts);
//get Product by ID
router.get("/:id", productController.getProductById);
//add a new Product
router.post("/", productController.createProduct);
//create a new Product
router.put("/:id", productController.udpateProduct);
//delete a Product
router.delete("/:id", productController.deleteProduct);

module.exports = router;