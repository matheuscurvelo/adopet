const database = require('../models')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class ShelterController {
    static async list(req, res) {
        try {
            const findShelters = await database.shelters.findAll({
                attributes: { exclude: ['password'] } 
            })
            if (findShelters.length > 0) {
                return res.status(200).json(findShelters)
            } else {
                return res.status(200).send({message: "Can't find any register"})
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async read(req, res) {
        try {
            const findShelter = await database.shelters.findByPk(req.params.id, {
                attributes: { exclude: ['password'] } 
            })
            if (findShelter) {
                return res.status(200).json(findShelter)
            } else {
                return res.status(500).send({message:'Shelter id not found'})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    
    static async create(req, res) {
        try {
            if (req.body.password) { req.body.password = bcrypt.hashSync(req.body.password, salt) }
            const newShelter = await database.shelters.create(req.body)
            return res.status(201).json(newShelter)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async update(req, res) {
        try {
            await database.shelters.update(req.body, {
                where: {id: Number(req.params.id)},
            })
            const findShelter = await database.shelters.findByPk(req.params.id, {
                attributes: { exclude: ['password'] } 
            })
            if (findShelter) {
                return res.status(200).json(findShelter)
            } else {
                return res.status(500).send({message:"Couldn't update this Shelter because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async delete(req, res) {
        try {
            const destroyedShelter = await database.shelters.destroy({
                where: {id: Number(req.params.id)},
            })

            if (destroyedShelter) {
                return res.status(200).send({message: "Shelter was deleted with success!"})
            } else {
                return res.status(500).send({message: "Couldn't delete this Shelter because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

module.exports = ShelterController