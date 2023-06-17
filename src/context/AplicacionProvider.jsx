import { useState, createContext } from "react"

const AplicacionContext = createContext()

const AplicacionProvider = ({children}) => {

    const [mostrarModal, setMostrarModal] = useState(false)

    return (
        <AplicacionContext.Provider
            value={{ 
                mostrarModal, 
                setMostrarModal 
            }}
        >
            {children}
        </AplicacionContext.Provider>
    )
}

export {
    AplicacionProvider
}

export default AplicacionContext