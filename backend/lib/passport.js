const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const { User } = require('../models');

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://127.0.0.1:3000/users/github-login/callback',
  scope: ['user:email'],
},
(async (accessToken, refreshToken, profile, cb) => {
  const {
    // eslint-disable-next-line camelcase
    id, emails: [emails], username, _json: { avatar_url },
  } = profile;
  try {
    const [user] = await User.findOrCreate({
      where: { email: emails.value },
      defaults: {
        password: id, nickname: username, account_type: 'github', profile_url: avatar_url,
      },
    });
    return cb(null, user);
  } catch (err) {
    return cb(err);
  }
})));
