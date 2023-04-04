const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mathbald:014789@node-express.zvfik2e.mongodb.net/adopet')

// connect()
var db = mongoose.connection



module.exports = db