import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Tiktok from "../assets/icons/tiktok.svg"
import Twitter from "../assets/icons/twitter.svg"
import Youtube from "../assets/icons/youtube.svg"

const Contacto = () => {
  return (
    <div id="contactenos" className="flex flex-col md:flex-row md:justify-around items-center gap-8 py-8 px-10 bg-[#1E1A1A] md:py-10 lg:h-96">
        <div className="flex flex-col gap-3">
            <h2 className="text-center md:text-left text-xl font-bold text-[#FF6600] mb-5 md:mb-10">Datos De Contacto</h2>
            <p className="text-lg text-white">Teléfono: +51 995 990 902</p>
            <p className="text-lg text-white">Correo: xxxxx@gmail.com</p>
            <p className="text-lg text-white">Dirección Lima: Av. Alameda del Corregidor, 2788 3er piso - La Molina</p>
            <p className="text-lg text-white">Dirección Trujillo: Calle José Enrique Rodo 682 2do piso, Urb. Las Quintanas - Trujillo</p>
            <div className="flex flex-row gap-2 md:gap-3">
              <a href="https://www.facebook.com/profile.php?id=100086806937152" target="_blank">
                <img src={Facebook} alt="Icono de Facebook" className="h-auto w-auto" />
              </a>
              <a href="https://www.instagram.com/emersonjesusmartin" target="_blank">
                <img src={Instagram} alt="Icono de Instagram" className="h-auto w-auto" />
              </a>
              <a href="https://www.youtube.com/@emersonjesusmartinramirezm6323" target="_blank">
                <img src={Youtube} alt="Icono de Youtube" className="h-auto w-auto" />
              </a>
              <a href="" target="_blank">
                <img src={Tiktok} alt="Icono de Tiktok" className="h-auto w-auto" />
              </a>
              <a href="" target="_blank">
                <img src={Twitter} alt="Icono de Twitter" className="h-auto w-auto" />
              </a>
            </div>
        </div>
        <form className="flex flex-col gap-4 max-md:w-full">
            <div className="flex flex-col md:flex-row gap-4">
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="text" placeholder="Ingrese su nombre aquí" />
                <input className="bg-[#D9D9D9] text-black p-3 rounded-md md:w-60" type="text" placeholder="Ingrese su correo aquí" />
            </div>
            <textarea className="resize-none bg-[#D9D9D9] h-28 text-black p-3 rounded-md md:mb-3" placeholder="Ingrese su mensaje aquí"></textarea>
            <input className="text-white bg-[#FF6600] py-3 rounded-md w-40 mx-auto hover:scale-105 transition duration-200 transition-delay-100" type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Contacto