var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const ShelterController = require('../controllers/ShelterController');
const UserMiddleware = require('../middlewares/UserMiddleware')

router.use(UserMiddleware.verifyLogin);
router.use(UserMiddleware.isShelter);

// router.get('/', ShelterController.list);
router.get('/', ShelterController.read);

router.post('/', ShelterController.create);

router.put('/', ShelterController.update);

router.delete('/', ShelterController.delete);

module.exports = router;
