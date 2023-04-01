var express = require('express');
var router = express.Router();
var fs = require('node:fs');

const table = './tables/tutores.json'

/* GET tutores listing. */
router.get('/', function(req, res, next) {
  let tutores = JSON.parse(fs.readFileSync(table,'utf-8'))
  res.status(200).send(tutores);
});

/* POST tutores listing. */

router.post('/', function(req, res, next) {
  let tutores = JSON.parse(fs.readFileSync(table,'utf-8'))
  let existe = false

  for (let [key, value] of Object.entries(tutores)) {
    if(value.id == req.body.id) {
      existe = true
    }
  }

  if (!existe) {
    tutores.push({
      id:     req.body.id,
      tutor:  req.body.tutor
    })
  }

  fs.writeFileSync(table,JSON.stringify(tutores),'utf-8')

  res.status(201).send(tutores);

});

/* PUT tutores listing. */
router.put('/:id', function(req, res, next) {
  let tutores = JSON.parse(fs.readFileSync(table,'utf-8'))

  for (let [key, value] of Object.entries(tutores)) {
    if(value.id == req.params.id) {
      tutores[key]['tutor'] = req.body.tutor
    }
  }

  fs.writeFileSync(table,JSON.stringify(tutores),'utf-8')

  res.status(200).send(tutores);

});

/* DELETE tutores listing. */
router.delete('/:id', function(req, res, next) {
  let tutores = JSON.parse(fs.readFileSync(table,'utf-8'))

  for (let [key, value] of Object.entries(tutores)) {
    if(value.id == req.params.id) {
      tutores.splice(value, 1)
    }
  }

  fs.writeFileSync(table,JSON.stringify(tutores),'utf-8')

  res.status(200).send(tutores);

});

module.exports = router;
