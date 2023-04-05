var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const TutorController = require('../controllers/TutorController');

router.get('/', TutorController.listTutors);
router.get('/:id', TutorController.readTutor);

router.post('/', TutorController.createTutor);

router.put('/:id', TutorController.updateTutor);

router.delete('/:id', TutorController.deleteTutor);

module.exports = router;
