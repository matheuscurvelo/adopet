const database = require('../models')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class PetController {
    static async list(req, res) {
        try {
            const findPets = await database.pets.findAll({
                include: [
                    {
                        model: database.shelters,
                        attributes: { 
                            exclude: ['password']
                        }        
                    }
                ],
                attributes: { 
                    exclude: ['shelter_id']
                },
                where: {
                    adopted: false,
                }
            })
            if (findPets.length > 0) {
                return res.status(200).json(findPets)
            } else {
                return res.status(200).send({message: "Can't find any register"})
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async read(req, res) {
        try {
            const findPet = await database.pets.findByPk(req.params.id, {
                include: [
                    {
                        model: database.shelters,
                        attributes: { 
                            exclude: ['password']
                        }        
                    }
                ],
                attributes: { 
                    exclude: ['shelter_id']
                }
            })
            if (findPet) {
                return res.status(200).json(findPet)
            } else {
                return res.status(500).send({message:'Pet id not found'})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    
    static async create(req, res) {
        try {
            const newPet = await database.pets.create(req.body)
            return res.status(201).json(newPet)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async update(req, res) {
        try {
            await database.pets.update(req.body, {
                where: {id: Number(req.params.id)},
            })
            const findPet = await database.pets.findByPk(req.params.id, {
                include: [
                    {
                        model: database.shelters,
                        attributes: { 
                            exclude: ['password']
                        }        
                    }
                ],
                attributes: { 
                    exclude: ['shelter_id']
                }
            })
            if (findPet) {
                return res.status(200).json(findPet)
            } else {
                return res.status(500).send({message:"Couldn't update this Pet because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async delete(req, res) {
        try {
            const destroyedPet = await database.pets.destroy({
                where: {id: Number(req.params.id)},
            })

            if (destroyedPet) {
                return res.status(200).send({message: "Pet was deleted with success!"})
            } else {
                return res.status(500).send({message: "Couldn't delete this Pet because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

module.exports = PetController