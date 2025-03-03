const express = require("express");
const brandController = require("../controllers/BrandController");
const asyncHandle = require("../middlewares/asyncHandle");

const brandRouter = express.Router();

brandRouter.get("/", asyncHandle(brandController.getBrands));
brandRouter.get("/:id", asyncHandle(brandController.getBrandById));
brandRouter.post("/", asyncHandle(brandController.createBrand));
brandRouter.put("/:id", asyncHandle(brandController.updateBrand));

module.exports = brandRouter;
