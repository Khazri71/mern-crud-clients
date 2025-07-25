import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AfficherClients } from './components/AfficherClients'
import { AjouterClient } from './components/AjouterClient'
import { ModifierClient } from './components/ModifierClient'
function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route  path='/'  element ={<AfficherClients/>} />
      <Route  path='/ajouter'  element ={<AjouterClient/>} />
      <Route  path='/modifier/:id'  element ={<ModifierClient/>} />
    </Routes>
    </BrowserRouter>



    </div>
  )
}

export default App
