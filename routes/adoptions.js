var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const AdoptionController = require('../controllers/AdoptionController');
const UserMiddleware = require('../middlewares/UserMiddleware')

router.use(UserMiddleware.verifyLogin);

router.post('/', AdoptionController.create);
router.delete('/:id', AdoptionController.delete);

module.exports = router;
