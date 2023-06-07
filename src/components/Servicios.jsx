import Servicio from "./Servicio"

const Servicios = () => {
  return (
    <div className="flex flex-col gap-3 py-6">
      <h2 className="text-xl text-center text-[#FF6600] font-bold">Servicios</h2>
      <div className="flex flex-col items-center gap-6 md:gap-3 py-6 px-9 md:flex-row md:justify-center md:gap-x-14">
          <Servicio
            titulo={"Vista Técnica Habitacional"} 
            descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"} 
            img={""} 
          />
          <Servicio
            titulo={"Vista Técnica Comercial"} 
            descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"} 
            img={""} 
          />
          <Servicio
            titulo={"Vista Técnica Industrial"} 
            descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"} 
            img={""} 
          />
      </div>
    </div>
  )
}

export default Servicios