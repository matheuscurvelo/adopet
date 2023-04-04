const mongoose = require("mongoose")

const tutorSchema = new mongoose.Schema({
    id: {type: String},
    name: {type: String, required: true}, 
    email: {type: String, required: true}, 
    phone: {type: String, required: true}, 
    city: {type: String, required: true}, 
    about: {type: String}
})

const tutores = mongoose.model('tutores', tutorSchema)

module.exports = tutores