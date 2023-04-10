var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const TutorController = require('../controllers/TutorController');

router.get('/', TutorController.list);
router.get('/:id', TutorController.read);

router.post('/', TutorController.create);

router.put('/:id', TutorController.update);

router.delete('/:id', TutorController.delete);

module.exports = router;
