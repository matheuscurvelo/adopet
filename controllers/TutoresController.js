const { error } = require('console');
const tutores = require('../models/Tutor');

class TutoresController {

    static listarTutores(req, res) {
        tutores.find(function (error, tutores) {
            res.status(200).json(tutores);
        })
    }

    static listarTutorPorId(req, res) {
        const id = req.params.id
        tutores.findById(id, function (error, tutores) {
            if (error) {
                res.status(400).send({'message':`${error.message} - Id não localizado`})
            } else {
                res.status(200).json(tutores);
            }
        })
    }

    static cadastrarTutor(req, res) {
        const tutor = new tutores(req, res)
        tutor.save(error => {
            if (error) {
                res.status(500).send({'message':`${error.message} - falha ao cadastrar o tutor`})
            } else {
                res.status(201).send(tutor.toJSON())
            }
        })
    }

    static atualizarTutor(req, res) {
        tutores.findByIdAndUpdate(id, {$set: req.body}, error => {
            if (error) {
                res.status(500).send({'message':`${error.message} - falha ao atualizar o tutor`})
            } else {
                res.status(200).send({'message': 'Tutor atualizado com sucesso'})
            }
        })
    }

    static deletarTutor(req, res) {
        tutores.findByIdAndDelete(id, {$set: req.body}, error => {
            if (error) {
                res.status(500).send({'message':`${error.message} - falha ao remover o tutor`})
            } else {
                res.status(200).send({'message': 'Tutor removido com sucesso'})
            }
        })
    }
}

module.exports = TutoresController