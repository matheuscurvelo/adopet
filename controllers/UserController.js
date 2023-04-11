require('dotenv').config()
const database = require('../models')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

class UserController {
    // static async list(req, res) {
    //     try {
    //         const findUsers = await database.tutors.findAll({
    //             attributes: { exclude: ['password'] } 
    //         })
    //         return res.status(200).json(findUsers)
    //     } catch (error) {
    //         return res.status(500).json(error)
    //     }
    // }

    static async login(req, res) {
        try {
            const {email = '', password = '', role = ''} = req.body
            let findUser

            if (!email || !password) {
                return res.status(401).send({message:'Invalid credentials'})
            }

            if (role == 'tutor') {
                findUser = await database.tutors.findOne({
                    where: {
                        email
                    }
                })
            } else if (role == 'shelter') {
                findUser = await database.shelters.findOne({
                    where: {
                        email
                    }
                })
            } else {
                return res.status(400).send({message:'role not found'})
            }
            
            if (bcrypt.compareSync(password, findUser.password) !== true) {
                console.log('password error');
                return res.status(401).send({message:'Email or password are incorrect'})
            }

            const token = jwt.sign({ role, id: findUser.id }, process.env.TOKEN_SECRET_KEY, {expiresIn: process.env.TOKEN_EXPIRATION})

            if (findUser) {
                return res.status(200).json({token})
            } else {
                return res.status(401).send({message:'Email or password are incorrect'})
            }
        } catch (error) {
            console.log('login error');
            return res.status(401).send({message:'Email or password are incorrect'})
        }
    }

    static async read(req, res) {
        try {
            const findUser = await database.tutors.findByPk(req.params.id, {
                attributes: { exclude: ['password'] } 
            })
            if (findUser) {
                return res.status(200).json(findUser)
            } else {
                return res.status(500).send({message:'User id not found'})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
    
    static async create(req, res) {
        try {
            if (req.body.password) { req.body.password = bcrypt.hashSync(req.body.password, salt) }
            const newUser = await database.tutors.create(req.body)
            return res.status(201).json(newUser)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }

    static async update(req, res) {
        try {
            await database.tutors.update(req.body, {
                where: {id: Number(req.params.id)},
            })
            const findUser = await database.tutors.findByPk(req.params.id, {
                attributes: { exclude: ['password'] } 
            })
            if (findUser) {
                return res.status(200).json(findUser)
            } else {
                return res.status(500).send({message:"Couldn't update this tutor because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }

    static async delete(req, res) {
        try {
            const destroyedUser = await database.tutors.destroy({
                where: {id: Number(req.params.id)},
            })

            if (destroyedUser) {
                return res.status(200).send({message: "User was deleted with success!"})
            } else {
                return res.status(500).send({message: "Couldn't delete this tutor because ID wasn't found"})
            }
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}

module.exports = UserController