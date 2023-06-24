const Proyecto = ({titulo, descripcion, img}) => {

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div style={styles} className="bg-black text-white h-full w-full md:w-80% rounded-xl opacity-100 flex flex-col gap-5 justify-end p-10">
        <p className="text-3xl font-bold ">{ titulo }</p>
        <p className="text-lg">{ descripcion }</p>
    </div>
  )
}

export default Proyecto