import { HashLink } from "react-router-hash-link"
import { useEffect, useState } from "react"

import Logo from "../assets/icons/logo.svg"
import Menu from "../assets/icons/menu.svg"

const Header = () => {

    const [ visibleMenu, setVisibleMenu ] = useState( false );

    const hiddenNavbar = () => {
        setVisibleMenu(!visibleMenu);
    }

    useEffect(()=>{
      
      function visible(){
        if(window.innerWidth>768){
          setVisibleMenu(false);
        }
      }

      window.addEventListener("resize",visible);

    },[window])

    return (
        <div className="flex flex-col items-center gap-3 py-6 px-9 bg-[#1E1A1A] md:flex-row justify-between">
            <p className="text-xl text-white text-center font-bold">
                <img className="lg:w-48 scale-105 lg:scale-125" src={ Logo } alt="Logo" />
            </p>
            <button onClick={ hiddenNavbar } className="md:hidden">
                <img src={ Menu } alt="Menú bars" />
            </button>
            <div className={`flex flex-col items-center gap-2 md:visible ${ visibleMenu? "hidden" : "" } md:flex-row md:gap-5`}>
                <HashLink smooth to="/#estudios" className="text-lg text-white hover:text-[#FF6600] ">Estudios</HashLink>
                <HashLink smooth to="/#quienesomos" className="text-lg text-white hover:text-[#FF6600] ">Quiénes Somos</HashLink>
                <HashLink smooth to="/#proyectos" className="text-lg text-white hover:text-[#FF6600] ">Proyectos</HashLink>
                <HashLink smooth to="/#servicios" className="text-lg text-white hover:text-[#FF6600] ">Servicios</HashLink>
                <HashLink smooth to="/#testimonios" className="text-lg text-white hover:text-[#FF6600] ">Testimonios</HashLink>
                <HashLink smooth to="/#contactenos" className="text-lg text-white hover:text-[#FF6600] ">Contáctenos</HashLink>
            </div>
        </div>
    )
}

export default Header