const express = require("express");
const router = express.Router();
const order_itemController = require("../controller/order_itemController");

// get all the Orders
router.get("/", order_itemController.getAllOrder_Items);
//get order by ID
router.get("/:id", order_itemController.getOrder_ItemById);
//add a new order
router.post("/", order_itemController.createOrder_Item);
//create a new order
router.put("/:id", order_itemController.updateOrder_Item);
//delete a order
router.delete("/:id", order_itemController.deleteOrder_Item);

module.exports = router;