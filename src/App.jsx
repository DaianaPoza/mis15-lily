import { useRef, useState } from 'react'
import Portada from './components/Portada/Portada'
import Hero from './components/Hero/Hero'
import CuentaRegresiva from './components/CuentaRegresiva/CuentaRegresiva'
import Fecha from './components/Fecha/Fecha'
import Lugar from './components/Lugar/Lugar'
import DressCode from './components/DressCode/DressCode'
import Regalos from './components/Regalos/Regalos'
import Confirmacion from './components/Confirmacion/Confirmacion'
import Footer from './components/Footer/Footer'
import Aparecer from './components/Aparecer/Aparecer'
import BotonMusica from './components/BotonMusica/BotonMusica'

function App() {
  const [ingreso, setIngreso] = useState(false)
  const [saliendo, setSaliendo] = useState(false)
  const audioRef = useRef(null)

  const handleIngresar = () => {
    audioRef.current?.play().catch(() => {})
    setSaliendo(true)
    setTimeout(() => setIngreso(true), 900)
  }

  return (
    <>
    <audio ref={audioRef} src={`${import.meta.env.BASE_URL}musica/cancion.mp3`} loop preload="none" />

      {!ingreso && <Portada onIngresar={handleIngresar} saliendo={saliendo} />}

      {ingreso && (
        <>
          <main>
            <Hero />
            <Aparecer><CuentaRegresiva /></Aparecer>
            <Aparecer><Fecha /></Aparecer>
            <Aparecer><Lugar /></Aparecer>
            <Aparecer><DressCode /></Aparecer>
            <Aparecer><Regalos /></Aparecer>
            <Aparecer><Confirmacion /></Aparecer>
          </main>

          <Aparecer><Footer /></Aparecer>

          <BotonMusica audioRef={audioRef} />
        </>
      )}
    </>
  )
}

export default App
