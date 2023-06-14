import { useState, createContext } from "react"

const AplicacionContext = createContext()

const AplicacionProvider = ({children}) => {

    return (
        <AplicacionContext.Provider
            value={{

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