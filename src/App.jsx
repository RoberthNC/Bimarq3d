import Header from "./components/Header"
import QuienesSomos  from "./components/QuienesSomos"
import Servicios from "./components/Servicios"
import Testimonios from "./components/Testimonios"
import Contacto from "./components/Contacto"

import { AplicacionProvider } from "./context/AplicacionProvider"

const App = () => {
  return (
    <AplicacionProvider>
      <Header />
      <QuienesSomos />
      <Servicios />
      <Testimonios />
      <Contacto />
    </AplicacionProvider>
  )
}

export default App