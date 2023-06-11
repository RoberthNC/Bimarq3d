import Imagen from "../assets/img/fondo.jpg"

const QuienesSomos = () => {

    const styles = {
        backgroundImage: `url(${Imagen})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <div id="quienesomos" style={styles} className="bg-[#1E1E1E]">
            <p className="bg-[#1E1E1E] opacity-75 text-lg text-white text-justify px-9 py-6 md:py-9 lg:pr-[50%]">
                <span className="font-bold text-xl block mb-5">¿Quiénes Somos?</span>
                Estudio de arquitectura muy reciente con 20 años de experiencia, plasma sus obras con el apoyo digital desde el BIM, MEP y visualización arquitectónica hasta la arquitectura algorítmica con nuestras plataformas de trabajo en tiempo real, para que nuestros clientes desde etapas muy tempranas puedan tener una experiencia espacial, cromática y estructural de sus requerimientos que ahora son nuestras obras y nuestra mejor carta de presentación.
            </p>
        </div>
    )
}

export default QuienesSomos