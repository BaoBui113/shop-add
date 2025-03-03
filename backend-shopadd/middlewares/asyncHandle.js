const asyncHandle = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        // message:
        //   process.env.NODE_ENV === "production"
        //     ? "Internal Server Error"
        //     : error.message,
        message: error,
      });
    }
  };
};
module.exports = asyncHandle;
