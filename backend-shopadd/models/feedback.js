"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FeedBack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FeedBack.belongsTo(models.Product, { foreignKey: "productId" });
      FeedBack.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  FeedBack.init(
    {
      productId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "FeedBack",
    }
  );
  return FeedBack;
};
