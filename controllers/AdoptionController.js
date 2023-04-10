const database = require('../models')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


class AdoptionController {
    static async list(req, res) {
        try {
            const findAdoptions = await database.adoptions.findAll({
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
            if (findAdoptions.length > 0) {
                return res.status(200).json(findAdoptions)
            } else {
                return res.status(200).send({message: "Can't find any register"})
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async read(req, res) {
        try {
            const findAdoption = await database.adoptions.findByPk(req.params.id, {
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
            if (findAdoption) {
                return res.status(200).json(findAdoption)
            } else {
                return res.status(500).send({message:'Adoption id not found'})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    
    static async create(req, res) {
        try {
            const newAdoption = await database.adoptions.create(req.body)
            return res.status(201).json(newAdoption)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async update(req, res) {
        try {
            await database.adoptions.update(req.body, {
                where: {id: Number(req.params.id)},
            })
            const findAdoption = await database.adoptions.findByPk(req.params.id, {
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
            if (findAdoption) {
                return res.status(200).json(findAdoption)
            } else {
                return res.status(500).send({message:"Couldn't update this Adoption because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async delete(req, res) {
        try {
            const destroyedAdoption = await database.adoptions.destroy({
                where: {id: Number(req.params.id)},
            })

            if (destroyedAdoption) {
                return res.status(200).send({message: "Adoption was deleted with success!"})
            } else {
                return res.status(500).send({message: "Couldn't delete this Adoption because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

module.exports = AdoptionController