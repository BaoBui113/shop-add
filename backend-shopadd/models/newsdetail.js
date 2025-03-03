"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NewsDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NewsDetail.belongsTo(models.Product, { foreignKey: "productId" });
      NewsDetail.belongsTo(models.News, { foreignKey: "newsId" });
    }
  }
  NewsDetail.init(
    {
      productId: DataTypes.INTEGER,
      newsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "NewsDetail",
    }
  );
  return NewsDetail;
};
