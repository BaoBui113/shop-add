"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Brand, { foreignKey: "brandId" });
      Product.belongsTo(models.Category, { foreignKey: "categoryId" });
      Product.hasMany(models.OrderDetail, { foreignKey: "productId" });
      Product.hasMany(models.BannerDetail, { foreignKey: "productId" });
      Product.hasMany(models.FeedBack, { foreignKey: "productId" });
      Product.hasMany(models.NewsDetail, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      oldPrice: DataTypes.INTEGER,
      image: DataTypes.TEXT,
      description: DataTypes.TEXT,
      specification: DataTypes.TEXT,
      buyTurn: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
