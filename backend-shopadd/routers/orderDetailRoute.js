const express = require("express");
const orderDetailController = require("../controllers/OrderDetailController");
const asyncHandle = require("../middlewares/asyncHandle");

const orderDetailRouter = express.Router();

orderDetailRouter.get("/", asyncHandle(orderDetailController.getOrderDetails));
orderDetailRouter.get(
  "/:id",
  asyncHandle(orderDetailController.getOrderDetailById)
);
orderDetailRouter.post(
  "/",
  asyncHandle(orderDetailController.createOrderDetail)
);
orderDetailRouter.put(
  "/:id",
  asyncHandle(orderDetailController.updateOrderDetail)
);

module.exports = orderDetailRouter;
