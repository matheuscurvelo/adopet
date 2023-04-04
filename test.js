const mongoose = require('mongoose')

async function run() {
    await mongoose.connect('mongodb+srv://mathbald:014789@node-express.zvfik2e.mongodb.net/adopet')
    var db = await mongoose.connection
    
    // db.on('error', console.log.bind(console, 'Erro de conexao'))
    // db.once('open', () => console.log('Conexao com banco feita com sucesso'))
    
    const tutorSchema = new mongoose.Schema({
        id:     {type: String},
        name:   {type: String, required: true}, 
        phone:  {type: String, required: true}, 
        city:   {type: String, required: true}, 
        about:  {type: String}
    })
    
    const tutores = mongoose.model('tutores', tutorSchema)
    let docs = await tutores.find()
    console.log(docs);
}
run()

// tutores.create({
//     name:   'Jhon Stewart',
//     phone:  '21998653265',
//     city:   'São Paulo', 
//     about:  ''

// });