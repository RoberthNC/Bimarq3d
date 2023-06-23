const Proyecto = ({titulo, descripcion, img}) => {

  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }

  return (
    <div style={styles} className="bg-black text-white h-full w-full md:w-80% rounded-md">
        <p>{ titulo }</p>
        <p>{ descripcion }</p>
    </div>
  )
}

export default Proyecto