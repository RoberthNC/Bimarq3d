const Ok = () => {
  return (
    <div className="h-full w-full fixed bg-[#1E1E1E]/70 flex justify-center items-center">
      <div className="bg-white w-[80%] h-[20%] fixed rounded-2xl shadow-lg md:w-[30%]">
        <div className="bg-[#34b912] rounded-t-2xl py-3 px-5">
          <p className="text-white font-bold text-lg">¡Mensaje enviado exitosamente!</p>
        </div>
        <p className="py-3 px-5 text-sm text-gray-700">
          Hemos recibido tu mensaje. Gracias por comunicarte con: <br />
          <span className="font-bold text-black">BIMARQ3D</span> <br />
          Nos pondremos en contacto con usted lo más pronto posible.
        </p>
      </div>
    </div>
  )
}

export default Ok