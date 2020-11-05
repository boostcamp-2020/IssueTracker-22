function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).json({
    success: false,
    message: 'internal server error',
  });
}

module.exports = errorHandler;
