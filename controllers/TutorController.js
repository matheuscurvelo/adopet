const database = require('../models')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class TutorController {
    // static async list(req, res) {
    //     try {
    //         const findTutors = await database.tutors.findAll({
    //             attributes: { exclude: ['password'] } 
    //         })
    //         return res.status(200).json(findTutors)
    //     } catch (error) {
    //         return res.status(500).json(error)
    //     }
    // }

    static async read(req, res) {
        try {
            const findTutor = await database.tutors.findByPk(req.userId, {
                attributes: { exclude: ['password'] } 
            })
            if (findTutor) {
                return res.status(200).json(findTutor)
            } else {
                return res.status(500).send({message:'Tutor id not found'})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    
    static async create(req, res) {
        try {
            if (req.body.password) { req.body.password = bcrypt.hashSync(req.body.password, salt) }
            const newTutor = await database.tutors.create(req.body)
            return res.status(201).json(newTutor)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async update(req, res) {
        try {
            await database.tutors.update(req.body, {
                where: {id: Number(req.userId)},
            })
            const findTutor = await database.tutors.findByPk(req.userId, {
                attributes: { exclude: ['password'] } 
            })
            if (findTutor) {
                return res.status(200).json(findTutor)
            } else {
                return res.status(500).send({message:"Couldn't update this tutor because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async delete(req, res) {
        try {
            const destroyedTutor = await database.tutors.destroy({
                where: {id: Number(req.userId)},
            })

            if (destroyedTutor) {
                return res.status(200).send({message: "Tutor was deleted with success!"})
            } else {
                return res.status(500).send({message: "Couldn't delete this tutor because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

module.exports = TutorController