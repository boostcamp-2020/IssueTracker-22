const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const commentsController = require('./comments.controller');

const comment = express.Router();

comment.post('/', authMiddleware, commentsController.create);

module.exports = comment;
