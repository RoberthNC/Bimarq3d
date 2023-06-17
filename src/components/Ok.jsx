import Check from "../assets/icons/check.svg"

const Ok = () => {
  return (
    <div className="h-full w-full fixed bg-[#1E1E1E]/70 flex justify-center items-center">
      <div className="bg-white w-[80%] h-[30%] fixed rounded-lg shadow-lg md:w-[30%] flex flex-col items-center justify-center gap-3">
        <div className="bg-[#008F39] w-16 h-16 rounded-full flex justify-center items-center">
          <img src={Check} alt="Ícono de Check" />
        </div>
        <p className="text-center text-lg font-bold">¡Su correo fue enviado exitosamente!</p>
        <button className="bg-[#2271B3] transition hover:scale-105 duration-200 transition-delay-100 text-white text-center text-lg px-10 py-2 rounded-md">Ok</button>
      </div>
    </div>
  )
}

export default Ok