var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const TutorController = require('../controllers/TutorController');
const UserMiddleware = require('../middlewares/UserMiddleware')

router.use(UserMiddleware.verifyLogin);
router.use(UserMiddleware.isTutor);

// router.get('/', TutorController.list);
router.get('/', TutorController.read);

router.post('/', TutorController.create);

router.put('/', TutorController.update);

router.delete('/', TutorController.delete);

module.exports = router;
