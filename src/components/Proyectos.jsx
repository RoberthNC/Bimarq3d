import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import SwiperCore, { Navigation, Pagination } from "swiper/core"

import Proyecto from "./Proyecto"

import ProyectosImage from "../assets/img/proyectos.jpg"

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
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0:{
                            slidesPerView: 1
                        },
                        480:{
                            slidesPerView: 2,
                            spaceBetween:30
                        },
                        768:{
                            slidesPerView: 3,
                            spaceBetween:30
                        },
                        1024:{
                            slidesPerView: 4,
                            spaceBetween:30
                        },
                        1280:{
                            slidesPerView:5,
                            spaceBetween:30
                        }
                    }}
                >
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