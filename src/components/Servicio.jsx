const Servicio = ({titulo, descripcion, img}) => {

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <div style={styles} className="w-40 h-40 border-[3px] border-[#FF6600] rounded-full flex justify-center items-center">
        <p className="text-lg text-center text-white h-full bg-[#1E1E1E] opacity-60 w-full rounded-full flex justify-center items-center">{titulo}</p>
      </div>
      <p className="text-lg text-justify mt-3">{descripcion}</p>
    </div>
  )
}

export default Servicio