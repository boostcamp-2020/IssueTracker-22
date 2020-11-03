const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.authMiddleware = async (req, res, next) => {
  const token = req.cookies.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { email: decoded.email } });
      if (user) {
        res.locals.user = user;
        return next();
      }
    } catch (err) {
      return next(err);
    }
  }
  return res.status(401).json({ success: false, message: 'Invalid or Expired Token Error' });
};
