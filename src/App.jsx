import './App.css'
import AdivinaGame from './components/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame'
import Memogame from './components/JuegoDeMemoria/Memogame/Memogame'
import ErrorGame from './components/JuegoDeIdentificacionDeErrores/ErrorGame/ErrorGame'
import { arrayCont, adivinaGame } from './contenidoEjemplo'

function App() {
  return (
    <>
      <Memogame contenido={arrayCont}/>
    </>
  )
}

export default App
