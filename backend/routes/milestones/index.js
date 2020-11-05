const express = require('express');
const milestoneController = require('./milestones.controller');

const router = express.Router();

router.get('/', milestoneController.list);
router.post('/', milestoneController.create);

module.exports = router;
