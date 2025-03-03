const db = require("../models");
const CreateProductRequest = require("../dtos/request/createProduct");
async function getProducts(req, res) {
  const { page = 1, limit = 10, search = "" } = req.query;
  const offset = (page - 1) * limit;
  const whereCondition = search
    ? { name: { [db.Sequelize.Op.like]: `%${search.toUpperCase()}%` } } // Dùng cho MySQL
    : {};

  const { count, rows: products } = await db.Product.findAndCountAll({
    where: whereCondition,
    limit: parseInt(limit), // Số lượng mỗi trang
    offset: parseInt(offset), // Vị trí bắt đầu lấy dữ liệu
    order: [["createdAt", "DESC"]], // Sắp xếp theo thời gian tạo mới nhất
  });

  res.status(200).json({
    success: true,
    data: products,
    currentPage: parseInt(page),
    totalPages: Math.ceil(count / limit),
    totalItems: count,
    message: "Fetched products successfully.",
  });
}
async function getProductById(req, res) {
  const product = await db.Product.findByPk(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    data: product,
    message: `This route will show product with id ${req.params.id}`,
  });
}
async function createProduct(req, res) {
  const product = await db.Product.create(req.body);
  return res.status(200).json({
    success: true,
    data: product,
  });
}
function updateProduct(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will update product with id ${req.params.id}`,
  });
}
module.exports = { getProducts, getProductById, createProduct, updateProduct };
