const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const milestoneController = require('./milestones.controller');

const router = express.Router();

router.get('/', milestoneController.list);
router.post('/', authMiddleware, milestoneController.create);

module.exports = router;
