import Servicio from "./Servicio"

import { servicios } from "../data/servicios.js"

const Servicios = () => {
  return (
    <div id="servicios" className="flex flex-col gap-3 py-6">
      <h2 className="text-xl text-center text-[#FF6600] font-bold">Servicios</h2>
      <div className="flex flex-col items-center gap-6 md:gap-3 py-6 px-9 md:flex-row md:justify-center md:gap-x-14">
          {
            servicios.map(({titulo, descripcion, img}, idx)=>(
              <Servicio
                key={idx}
                titulo={titulo} 
                descripcion={descripcion} 
                img={img} 
              />
            ))
          }
      </div>
    </div>
  )
}

export default Servicios