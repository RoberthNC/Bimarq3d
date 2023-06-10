const Contacto = () => {
  return (
    <div id="contactenos" className="flex flex-col md:flex-row md:justify-around gap-8 py-8 px-10 bg-[#1E1A1A]">
        <div className="flex flex-col gap-3">
            <h2 className="text-center md:text-left text-xl font-bold text-[#FF6600] mb-5 md:mb-10">Datos De Contacto</h2>
            <p className="text-lg text-white">Teléfono: +51 995 990 902</p>
            <p className="text-lg text-white">Correo: xxxxx@gmail.com</p>
            <p className="text-lg text-white">Dirección: Calle xxxxx, xxxxx, San Borja - Lima</p>
        </div>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="text" placeholder="Ingrese su nombre aquí" />
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="text" placeholder="Ingrese su correo aquí" />
            </div>
            <textarea className="resize-none bg-[#D9D9D9] h-28 text-black p-3 rounded-md md:mb-3" placeholder="Ingrese su mensaje aquí"></textarea>
            <input className="text-white bg-[#FF6600] py-3 rounded-md w-40 mx-auto" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Contacto