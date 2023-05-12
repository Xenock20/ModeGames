import './App.css'
import AdivinaGame from './components/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame'
import Memogame from './components/JuegoDeMemoria/Memogame/Memogame'
import { arrayCont, adivinaGame } from './contenidoEjemplo'

function App() {
  return (
    <>
      <AdivinaGame contenido={adivinaGame}></AdivinaGame>
    </>
  )
}

export default App
