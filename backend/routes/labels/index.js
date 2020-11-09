const express = require('express');
const labelController = require('./labels.controller');

const router = express.Router();

router.get('/', labelController.list);

module.exports = router;
