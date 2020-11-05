const express = require('express');
const userController = require('./users.controller');
const { authMiddleware } = require('../../middlewares/auth');

const router = express.Router();

router.get('/', authMiddleware, userController.getAllUsers);
router.get('/github-login', userController.githubLogin);
router.get('/github-login/callback', userController.githubLoginCallback);

module.exports = router;
