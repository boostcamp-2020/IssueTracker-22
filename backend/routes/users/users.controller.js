const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error' });
  }
};

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
