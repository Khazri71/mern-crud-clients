const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ClientModel = require('./models/Clients')
const dotenv = require("dotenv")
const DBConnect = require('./config/dbConn');


dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())

// Connecter Database 
DBConnect();



// CRUD
// API :  Ajouter client 
app.post("/ajouterClient" , (req , res) => {
    ClientModel.create(req.body)
    .then( client => res.json(client))
    .catch( err => res.json(err))
})

// API : Afficher clients
app.get("/" , (req , res) => {
    ClientModel.find({})
    .then( clients => res.json(clients))
    .catch( err => res.json(err))
})

// API : Get client by Id
app.get("/obtenirClient/:id" , (req,res) => {
    const id = req.params.id
    ClientModel.findById({_id:id})
    .then( client => res.json(client) )
    .catch( err => res.json(client))
})


// API : Modifier client by Id
app.put("/modifierClient/:id" , (req,res) => {
    const id = req.params.id 
    ClientModel.findByIdAndUpdate( {_id:id} , {nom:req.body.nom , email: req.body.email , age:req.body.age})
    .then(client => res.json(client))
    .catch(err => res.json(err))
})


// API : Supprimer client by Id
app.delete("/supprimerClient/:id" , (req,res) => {
    const id = req.params.id
    ClientModel.findByIdAndDelete({_id:id})
    .then( client => res.json(client))
    .catch( err => res.json(err))
})

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})