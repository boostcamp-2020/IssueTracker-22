function asyncHandler(middleware) {
  return (req, res, next) => {
    middleware(req, res, next)
      .catch(next);
  };
}

module.exports = asyncHandler;
