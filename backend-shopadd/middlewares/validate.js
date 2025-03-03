const validate = (requestType) => {
  return (req, res, next) => {
    const { error } = requestType.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    next();
  };
};
module.exports = validate;
