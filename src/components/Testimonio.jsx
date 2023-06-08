const Testimonio = ({descripcion, autor, img}) => {
  return (
    <div className="flex items-center gap-3 px-3 py-3 bg-[#1E1A1A] rounded-md">
      <div className="w-36 h-36 border-[3px] border-[#FF6600] rounded-full flex justify-center items-center bg-white basis-1/2">
      </div>
      <div className="flex flex-col gap-3 basis-1/2">
        <p className="text-white text-lg text-justify">{descripcion}</p>
        <p className="text-white text-lg">Autor: {autor}</p>
      </div>
    </div>
  )
}

export default Testimonio