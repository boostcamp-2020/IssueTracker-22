const express = require('express');
const userController = require('./users.controller');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/github-login', userController.githubLogin);
router.get('/github-login/callback', userController.githubLoginCallback);

module.exports = router;
