function getOrders(req, res) {
  res.status(200).json({
    success: true,
    message: "This route will show all orders in the database.",
  });
}

function getOrderById(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will show order with id ${req.params.id}`,
  });
}

function createOrder(req, res) {
  res.status(201).json({
    success: true,
    message: "This route will create a new order in the database.",
  });
}

function updateOrder(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will update order with id ${req.params.id}`,
  });
}

module.exports = { getOrders, getOrderById, createOrder, updateOrder };
