import { useContext } from "react"
import { AplicacionContext } from "./context/AplicacionProvider"

import QuienesSomos  from "./components/QuienesSomos"
import Servicios from "./components/Servicios"
import Testimonios from "./components/Testimonios"
import Contacto from "./components/Contacto"

import Ok from "./components/Ok"

import { AplicacionProvider } from "./context/AplicacionProvider"

const App = () => {

  const { mostrar } = useContext(AplicacionContext)

  return (
    <AplicacionProvider>
      {false && <Ok />}
      <QuienesSomos />
      <Servicios />
      <Testimonios />
      <Contacto />
    </AplicacionProvider>
  )
}

export default App