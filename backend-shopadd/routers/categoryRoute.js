const express = require("express");
const categoryController = require("../controllers/CategoryController");
const asyncHandle = require("../middlewares/asyncHandle");

const categoryRouter = express.Router();

categoryRouter.get("/", asyncHandle(categoryController.getCategories));
categoryRouter.get("/:id", asyncHandle(categoryController.getCategoryById));
categoryRouter.post("/", asyncHandle(categoryController.createCategory));
categoryRouter.put("/:id", asyncHandle(categoryController.updateCategory));

module.exports = categoryRouter;
