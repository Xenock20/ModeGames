import './App.css'
import Memogame from './components/JuegoDeMemoria/Memogame/Memogame'
import { arrayCont } from './contenidoEjemplo'

function App() {
  return (
    <>
      <Memogame contenido={arrayCont}></Memogame>
    </>
  )
}

export default App
