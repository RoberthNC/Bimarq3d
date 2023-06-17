import { useState, createContext } from "react"

const AplicacionContext = createContext()

const AplicacionProvider = ({children}) => {

    const [mostrar, setMostrar] = useState(false)

    return (
        <AplicacionContext.Provider value={{ 
            mostrar, 
            setMostrar 
        }}
        >
            {children}
        </AplicacionContext.Provider>
    )
}

export {
    AplicacionProvider
}

export default AplicacionProvider