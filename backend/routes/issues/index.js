const express = require('express');
const issuesController = require('./issues.controller');

const issue = express.Router();

issue.get('/', issuesController.list);
issue.get('/:issueNumber', issuesController.detail);

module.exports = issue;
