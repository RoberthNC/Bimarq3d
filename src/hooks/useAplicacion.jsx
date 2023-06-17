import { useContext } from "react"
import AplicacionContext from "../context/AplicacionProvider"

const useAplicacion = () => {
    return useContext(AplicacionContext)
}

export default useAplicacion