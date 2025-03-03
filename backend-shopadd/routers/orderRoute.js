const express = require("express");
const orderController = require("../controllers/OrderController");
const asyncHandle = require("../middlewares/asyncHandle");

const orderRouter = express.Router();

orderRouter.get("/", asyncHandle(orderController.getOrders));
orderRouter.get("/:id", asyncHandle(orderController.getOrderById));
orderRouter.post("/", asyncHandle(orderController.createOrder));
orderRouter.put("/:id", asyncHandle(orderController.updateOrder));

module.exports = orderRouter;
