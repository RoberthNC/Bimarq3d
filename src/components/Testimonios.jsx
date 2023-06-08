import Testimonio from "./Testimonio"

import { testimonios } from "../data/testimonios.js"

const Testimonios = () => {
  return (
    <div id="testimonios" className="flex flex-col items-center gap-3 py-6 px-9 mb-3">
        <h2 className="text-xl text-center text-[#FF6600] font-bold">Testimonios</h2>
        <p className="text-lg text-center mb-3">¿Qué dicen de BIMARQ3D?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-3">
            {
                testimonios.map(({descripcion,autor,img},idx)=>(
                    <Testimonio
                        key={idx}
                        descripcion={descripcion}
                        autor={autor}
                        img={img}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Testimonios