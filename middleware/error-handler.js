const { CustomApiError } = require("../error/custom-error");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    console.log("This is the error created by me");
    res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: "something went wrong, please try again later" });
};

module.exports = errorHandlerMiddleware;
