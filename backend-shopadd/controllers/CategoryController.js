const db = require("../models");

function getCategories(req, res) {
  res.status(200).json({
    success: true,
    message: "This route will show all categories in the database.",
  });
}

function getCategoryById(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will show category with id ${req.params.id}`,
  });
}

async function createCategory(req, res) {
  try {
    const category = await db.Category.create(req.body);
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

function updateCategory(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will update category with id ${req.params.id}`,
  });
}

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
};
