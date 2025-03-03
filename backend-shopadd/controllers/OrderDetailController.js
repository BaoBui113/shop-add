function getOrderDetails(req, res) {
  res.status(200).json({
    success: true,
    message: "This route will show all order details in the database.",
  });
}

function getOrderDetailById(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will show order detail with id ${req.params.id}`,
  });
}

function createOrderDetail(req, res) {
  res.status(201).json({
    success: true,
    message: "This route will create a new order detail in the database.",
  });
}

function updateOrderDetail(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will update order detail with id ${req.params.id}`,
  });
}

module.exports = {
  getOrderDetails,
  getOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
};
