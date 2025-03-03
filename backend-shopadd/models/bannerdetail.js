"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BannerDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BannerDetail.belongsTo(models.Product, { foreignKey: "productId" });
      BannerDetail.belongsTo(models.Banner, { foreignKey: "bannerId" });
    }
  }
  BannerDetail.init(
    {
      productId: DataTypes.INTEGER,
      bannerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BannerDetail",
    }
  );
  return BannerDetail;
};
