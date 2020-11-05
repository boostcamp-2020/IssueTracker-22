const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const issuesController = require('./issues.controller');

const issue = express.Router();

issue.get('/', issuesController.list);
issue.post('/', authMiddleware, issuesController.create);

module.exports = issue;
