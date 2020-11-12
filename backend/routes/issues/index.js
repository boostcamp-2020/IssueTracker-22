const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const issuesController = require('./issues.controller');

const issue = express.Router();

issue.get('/', issuesController.list);
issue.get('/:issueNumber', issuesController.detail);
issue.post('/', authMiddleware, issuesController.create);
issue.post('/update', authMiddleware, issuesController.update);

module.exports = issue;
