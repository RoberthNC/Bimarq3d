const Servicio = ({titulo, descripcion, img}) => {

  // TODO: Arreglar el tema de los círculos
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="w-40 h-40 border-[3px] border-[#FF6600] rounded-full flex justify-center items-center">
        <p className="text-lg text-center text-black">{titulo}</p>
      </div>
      <p className="text-lg text-justify mt-3">{descripcion}</p>
    </div>
  )
}

export default Servicio