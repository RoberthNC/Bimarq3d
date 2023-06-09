import QuienesSomos from "./QuienesSomos"
import Proyectos from "./Proyectos"
import Servicios from "./Servicios"
import Testimonios from "./Testimonios"
import Contacto from "./Contacto"

import Ok from "./Ok"
import useAplicacion from "../hooks/useAplicacion"


const AppBimarq3d = () => {

    const { mostrarModal } = useAplicacion()

    return (
        <>
            { mostrarModal && <Ok /> }
            <QuienesSomos />
            <Proyectos />
            <Servicios />
            <Testimonios />
            <Contacto />
        </>
    )
}

export default AppBimarq3d