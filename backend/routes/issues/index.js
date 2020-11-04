const express = require('express');
const issuesController = require('./issues.controller');
const issue = express.Router();

issue.get('/', issuesController.list);

module.exports = issue;