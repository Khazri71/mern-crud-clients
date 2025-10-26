import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'
import axios from 'axios'



export const AfficherClients = () => {

  const [clients , setClients ] = useState([])

  const apiUrl = import.meta.env.VITE_API_URL;



  useEffect( () => {
     axios.get(apiUrl)
     .then( result => setClients(result.data))
     .catch( err => console.log(err))
  }, [])


   const Supprimer = (id) => {
    axios.delete(`${apiUrl}/supprimerClient/${id}`)
    .then( result => {
      console.log(result)
      window.location.reload()
    })
    .catch( err => console.log(err) )
   }



  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-body-secondary">
  
  <div className="w-50 bg-white p-3 rounded">
 <Link to="/ajouter" className="btn btn-success">Ajouter + </Link>
<table className="table  ">

  <thead>
    <tr>
      <th scope="col"  className="text-center">Nom</th>
      <th scope="col"  className="text-center">Email</th>
      <th scope="col"  className="text-center">Age</th>
      <th scope="col" className="text-center">Action</th>
    </tr>
  </thead>
  <tbody>
   {
   clients && clients.map ( (client) => (
     <tr >
      <td>{client.nom}</td>
      <td>{client.email}</td>
      <td>{client.age}</td>
      <td>
       <Link to={`modifier/${client._id}`} className="btn btn-primary mx-2 " >Modifier</Link>
       <button type="button" className="btn btn-danger " onClick={(e) => Supprimer(client._id)}>Supprimer</button>
      </td>
    </tr>
   )
   )
   }
   
  </tbody>
</table>
</div>
</div>
    
    
    </>
    
  )
}
