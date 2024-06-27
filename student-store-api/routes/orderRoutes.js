const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");
const order_itemRoutes = require("../routes/order_itemRoutes");


// get all the Orders
router.get("/", orderController.getAllOrders);
//get order by ID
router.get("/:id", orderController.getOrderById);
//add a new order
router.post("/", orderController.createOrder);
//create a new order
router.put("/:id", orderController.udpateOrder);
//delete a order
router.delete("/:id", orderController.deleteOrder);

router.post("/:order_id/items", orderController.addedOrderItem);
router.get("/:order_id/total", orderController.getOrderTotal);


module.exports = router;