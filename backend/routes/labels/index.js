const express = require('express');
const labelController = require('./labels.controller');

const router = express.Router();

router.get('/', labelController.list);
router.post('/', labelController.create);
router.put('/:id', labelController.update);
router.delete('/:id', labelController.delete);

module.exports = router;
