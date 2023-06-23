import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import SwiperCore, { Navigation, Pagination } from "swiper/core"
import { Autoplay } from "swiper"

import Proyecto from "./Proyecto"

import ProyectosImage from "../assets/img/proyectos.jpg"
import Impresion3D from "../assets/img/impresion3d.jpg"
import MuseoSican from "../assets/img/museosican.png"

SwiperCore.use([Navigation, Pagination])

const Proyectos = () => {

    const styles = {
        backgroundImage: `url(${ProyectosImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }

    return (
        <div id="proyectos" style={styles} className="h-screen md:h-[80vh]">
            <div className="flex justify-center gap-5 bg-[#1E1E1E] opacity-70 px-9 py-6 w-full h-full md:h-[80vh] md:py-9 md:px-20">
                <Swiper
                    modules={[Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{delay:5000}}
                >
                    <SwiperSlide>
                        <Proyecto
                            titulo="Impresión 3D"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"
                            img={Impresion3D}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto
                            titulo="Museo Nacional de Sicán"
                            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"
                            img={MuseoSican}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Proyecto />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}

export default Proyectos