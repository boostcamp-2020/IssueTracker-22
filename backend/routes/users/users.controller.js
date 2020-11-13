const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const asyncHandler = require('../../lib/asyncHandler');

exports.getLoggedInUser = asyncHandler(async (req, res, next) => {
  const {
    id, email, nickname, profile_url,
  } = res.locals.user;

  res.json({
    success: true,
    content: {
      user: {
        id, email, nickname, profile_url,
      },
    },
  });
});

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.findAll({
    attributes: ['id', 'nickname', 'profile_url'],
  });
  res.json({
    success: true,
    content: { users },
  });
});

exports.githubLogin = passport.authenticate('github', { scope: ['user:email'] });

exports.githubLoginCallback = (req, res, next) => {
  passport.authenticate('github', { session: false }, (err, user, info) => {
    if (err || !user) return res.redirect('/users/login');

    const payload = { userId: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

    const options = { httpOnly: true };
    res.cookie('authorization', token, options);
    return res.redirect('/');
  })(req, res, next);
};
