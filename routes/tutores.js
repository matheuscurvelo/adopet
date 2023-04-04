var express = require('express');
var router = express.Router();
var fs = require('node:fs');
const TutoresController = require('../controllers/TutoresController.js');
const tutores = require('../models/Tutor.js')

const table = './models/tutores.json'

router.get('/', TutoresController.listarTutores);
router.get('/:id', TutoresController.listarTutorPorId);

router.post('/', TutoresController.cadastrarTutor);

router.put('/:id', TutoresController.atualizarTutor);
  
router.delete('/:id', TutoresController.deletarTutor);

module.exports = router;
