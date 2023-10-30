const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: "something went wrong, please try again later" });
};

module.exports = errorHandlerMiddleware;
