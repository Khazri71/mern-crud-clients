import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const AjouterClient = () => {

  const [nom , setNom] = useState()
  const [email , setEmail] = useState()
  const [age , setAge] = useState()

  const navigate = useNavigate()

    const apiUrl = import.meta.env.VITE_API_URL;



   const Ajouter = (e) => {
         e.preventDefault()
         axios.post(`${apiUrl}/ajouterClient`  , {nom , email , age})
         .then(result => {
          console.log(result)
          navigate("/")
          
        })
         .catch(err => console.log(err))
   }

  return (
    <>

<div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">

    <form  onSubmit={Ajouter}
     className="w-50 border p-3 rounded bg-white">
      <h3 className="mb-4">Ajouter Client</h3>
  <div className="mb-3">
    <input type="text" className="form-control" id="nom" placeholder="Entrer Nom"   required
    onChange={(e) => setNom(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="email" placeholder="Entrer Email" required
    onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="mb-3">
    <input type="number" min="0" className="form-control" id="age" placeholder="Entrer Age" required
    onChange={(e) => setAge(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn btn-success">Ajouter</button>  
  </form>

    </div>
    
    
    </>
  )
}
