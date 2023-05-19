import './App.css'
import AdivinaGame from './components/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame'
import Memogame from './components/JuegoDeMemoria/Memogame/Memogame'
import ErrorGame from './components/JuegoDeIdentificacionDeErrores/ErrorGame/ErrorGame'
import { arrayCont, adivinaGame, errorGame } from './contenidoEjemplo'

function App() {
  return (
    <>
      <ErrorGame contenido={errorGame}/>
    </>
  )
}

export default App
