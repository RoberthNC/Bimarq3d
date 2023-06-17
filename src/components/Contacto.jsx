import { useState } from "react"

import Error from "./Error"

import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Tiktok from "../assets/icons/tiktok.svg"
import Twitter from "../assets/icons/twitter.svg"
import Youtube from "../assets/icons/youtube.svg"
import useAplicacion from "../hooks/useAplicacion"

const Contacto = () => {

  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [error, setError] = useState(false)

  const { setMostrarModal } = useAplicacion()

  const handleSubmit = async(e) => {
    e.preventDefault()
    
    if([nombre, correo, mensaje].includes("")){
      console.log("Todos los campos son requeridos")
      setError(true)

      setTimeout(()=>{
        setError(false)
      },3000)
      
      return
    }

    //TODO: Crear la configuración para el envío de emails

    setMostrarModal(true)
    setTimeout(()=>{
      setMostrarModal(false)
    },3000)

    setNombre("")
    setCorreo("")
    setMensaje("")
    setError(false)
  }

  return (
    <div id="contactenos" className="flex flex-col md:flex-row md:justify-around items-center gap-8 py-8 px-10 bg-[#1E1A1A] md:py-10 lg:h-96">
        <div className="flex flex-col gap-3">
            <h2 className="text-center md:text-left text-xl font-bold text-[#FF6600] mb-5 md:mb-10">Datos De Contacto</h2>
            <p className="text-lg text-white">Teléfono: +51 995 990 902</p>
            <p className="text-lg text-white">Correo: informes@bimarq3d.com</p>
            <p className="text-lg text-white">Dirección Lima: Av. Alameda del Corregidor, 2788 3er piso - La Molina</p>
            <p className="text-lg text-white">Dirección Trujillo: Calle José Enrique Rodo 682 2do piso, Urb. Las Quintanas - Trujillo</p>
            <div className="flex flex-row gap-2 md:gap-3">
              <a className="transition duration-150 hover:scale-105 transition-delay-100" href="https://www.facebook.com/profile.php?id=100086806937152" target="_blank">
                <img src={Facebook} alt="Icono de Facebook" className="h-auto w-auto" />
              </a>
              <a className="transition duration-150 hover:scale-105 transition-delay-100" href="https://www.instagram.com/emersonjesusmartin" target="_blank">
                <img src={Instagram} alt="Icono de Instagram" className="h-auto w-auto" />
              </a>
              <a className="transition duration-150 hover:scale-105 transition-delay-100" href="https://www.youtube.com/@emersonjesusmartinramirezm6323" target="_blank">
                <img src={Youtube} alt="Icono de Youtube" className="h-auto w-auto" />
              </a>
              <a className="transition duration-150 hover:scale-105 transition-delay-100" href="https://www.tiktok.com/@www.bimarq3d.com" target="_blank">
                <img src={Tiktok} alt="Icono de Tiktok" className="h-auto w-auto" />
              </a>
              <a className="transition duration-150 hover:scale-105 transition-delay-100" href="https://twitter.com/bimarq3d" target="_blank">
                <img src={Twitter} alt="Icono de Twitter" className="h-auto w-auto" />
              </a>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-md:w-full">
            { error && <Error /> }
            <div className="flex flex-col md:flex-row gap-4">
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="text" placeholder="Ingrese su nombre aquí" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="email" placeholder="Ingrese su correo aquí" value={correo} onChange={(e)=>setCorreo(e.target.value)} />
            </div>
            <textarea className="resize-none bg-[#D9D9D9] h-28 text-black p-3 rounded-md md:mb-3" placeholder="Ingrese su mensaje aquí" value={mensaje} onChange={(e)=>setMensaje(e.target.value)}></textarea>
            <input className="text-white bg-[#FF6600] py-3 rounded-md w-40 mx-auto hover:scale-105 transition duration-200 transition-delay-100" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Contacto