const db = require("../models");

function getBrands(req, res) {
  res.status(200).json({
    success: true,
    message: "This route will show all brands in the database.",
  });
}

function getBrandById(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will show brand with id ${req.params.id}`,
  });
}

async function createBrand(req, res) {
  try {
    const brand = await db.Brand.create(req.body);
    res.status(200).json({
      success: true,
      data: brand,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

function updateBrand(req, res) {
  res.status(200).json({
    success: true,
    message: `This route will update brand with id ${req.params.id}`,
  });
}

module.exports = { getBrands, getBrandById, createBrand, updateBrand };
