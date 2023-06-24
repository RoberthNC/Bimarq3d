const Proyecto = ({titulo, descripcion, img}) => {

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div style={styles} className="h-full w-full md:w-80% rounded-xl opacity-100 bg-contain bg-no-repeat bg-center">
        <div className="bg-[#1E1E1E] opacity-70 h-full w-full rounded-xl flex flex-col justify-end gap-5 p-5">
          <p className="text-3xl font-bold text-white">{ titulo }</p>
          <p className="text-lg text-white">{ descripcion }</p>
        </div>
    </div>
  )
}

export default Proyecto