const Joi = require("joi");
class CreateProductRequest {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.oldPrice = data.oldPrice;
    this.image = data.image;
    this.description = data.description;
    this.specification = data.specification;
    this.buyTurn = data.buyTurn;
    this.quantity = data.quantity;
    this.brandId = data.brandId;
    this.categoryId = data.categoryId;
  }
  static validate(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().positive().required(),
      oldPrice: Joi.number().min(0),

      description: Joi.string().min(10).required(),
      specification: Joi.string().min(10).required(),
      buyTurn: Joi.number().min(0).required(),
      quantity: Joi.number().min(0).required(),
      brandId: Joi.number().min(1).required(),
      categoryId: Joi.number().min(1).required(),
    }).options({ convert: false });

    return schema.validate(data);
  }
}
module.exports = CreateProductRequest;
