const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:H15OtOH4RPfrTDdl@cluster0.3bzcq.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async() => {
    if(!conn){
        conn = mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        await conn
    }
}