const express = require("express");
const getProducts = require("../controllers/ProductController");
const asyncHandle = require("../middlewares/asyncHandle");
const validate = require("../middlewares/validate");
const CreateProductRequest = require("../dtos/request/createProduct");

const productRouter = express.Router();

productRouter.get("/", asyncHandle(getProducts.getProducts));
productRouter.get("/:id", asyncHandle(getProducts.getProductById));
productRouter.post(
  "/",
  validate(CreateProductRequest),
  asyncHandle(getProducts.createProduct)
);
productRouter.put("/:id", asyncHandle(getProducts.updateProduct));
productRouter.delete("/:id", asyncHandle(getProducts.deleteProduct)); // Nếu có xóa sản phẩm

module.exports = productRouter;
