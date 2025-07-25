const mongoose = require('mongoose')



const ClientSchema = new mongoose.Schema ({
    nom : String,
    email : String,
    age : Number

})

const ClientModel = mongoose.model("clients-dbs" , ClientSchema)

module.exports = ClientModel