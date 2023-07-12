import { Autoplay } from "swiper"
import React, { lazy, Suspense } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import SwiperCore, { Navigation, Pagination } from "swiper/core"

import Spinner from "./Spinner"

import Impresion3D from "../assets/img/impresion3d.jpg"
import MuseoSican from "../assets/img/museosican.png"
import Banister from "../assets/img/banister.png"
import CasaDeCampo from "../assets/img/casacampo.png"
import Huanchaco from "../assets/img/huanchaco.jpg"
import RosellPiazzini from "../assets/img/rosellpiazzini.png"

SwiperCore.use([Navigation, Pagination])

const LazyProyecto = lazy(()=>import("./Proyecto"))

const Proyectos = () => {
    return (
        <div id="proyectos" className="h-screen md:h-[80vh]">
            <p className="text-xl text-center text-[#FF6600] shadow-xl font-bold bg-[#1E1A1A] pt-6">Proyectos BIMARQ3D</p>
            <div className="flex justify-center gap-5 bg-[#1E1A1A] px-9 py-6 w-full h-full md:h-[80vh] md:py-9 md:px-20">
                <Swiper
                    modules={[Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{delay:5000}}
                    loop={true}
                >
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto
                                titulo="Impresión 3D"
                                descripcion="Este modelo fue concebido por nuestro estudio de arquitectura BIMARQ3D en un entorno totalmente digital desde nuestra plataforma de trabajó Rhinoceros 3D, quien no distraía a nuestros miembros del equipo de trabajo por ser muy intuitivo y portable, nuestro cliente LA DIRECCIÓN DEL MUSEO NACIONAL DE SICAN deseaba un modelo tangible para poder evaluarlo así que echamos uso de la impresión 3d, para nosotros fue el comienzo de una aventura compositiva ya que no había limitantes formales para la construcción del prototipo."
                                img={Impresion3D}
                            />
                        </Suspense>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto
                                titulo="Museo Nacional de Sicán"
                                descripcion="Proyecto Arquitectónico de gran escala e impacto en diversos aspectos de la conservación desde lo natural, cultural, arqueológico y biológico para la conservación del patrimonio arqueológico del SANTUARIO HISTÓRICO DEL BOSQUE DE POMAC, que surge como una respuesta al PLAN MAESTRO de salvaguardar la mayor concentración de vestigios arqueológicos de barro de sur América, con la finalidad de no tener interrupciones por los fenómenos estacionales de las lluvias conocidos como Fenómeno del Niño que corta al Bosque y ante la eminente descubrimientos de más restos arqueológicos, se decide elaborar el proyecto MUSEO DE SITIO PARA EL SANTUARIO HISTÓRICO BOSCA DE POMAC EN EL SECTOR POMAC III de amortiguamiento lejos de las inundaciones del Sector de Pitipo para garantizar que las actividades de restauración, exhibición no sean interrumpidas en ninguna época del año y sobre todo dotar a la población del bosque de una motivación para la educación y preservación de su entorno para sus futuras generación enseñándoles a tener un nuevo eje en su economía gatillada y ahora solventada al través del ecoturismo. "
                                img={MuseoSican}
                            />
                        </Suspense>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto 
                                titulo="Banister"
                                descripcion="Por encargo de la constructora AyG Diseño y Construcción, se nos encarga a unos de los equipos de diseño de BIMARQ3D el diseño la Fachada de la cadena de tiendas de Banister de la Ciudad de Trujillo, con requisitos puntuales como una gran área vidriada que daría la modulación del local comercial a través del diseño del muro cortina, jerarquizando la entrada con un Pórtico de época para realizar un contraste en la composición, con exhibición a la calle, así aun cerrada la tienda seguiría presentando sus productos, terminando con el logo para identificar claramente la marca."
                                img={Banister} 
                            />
                        </Suspense>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto
                                titulo="Casa de Campo"
                                descripcion="Les presento la casa de campo diseñada íntegramente para un colega cercano de BIMARQ3D, el ARQUITECTO ANGELO ZALAZAR CORDERO, nos trae el reto de presentar el recorrido virtual y las vistas de los principales espacio de la casa de campo en la ciudad de lima, Pachacamac para una familia que quiere disfrutar del área verde rodeando íntegramente del conjunto dotándolo de privacidad para los residentes de la casa, contrapuesta por su área de parrilla para generar en torno a esta las actividades recreativas, dejando en un segundo nivel el área de dormitorio y estudio, sin dejar de lado el área de la sala, comedor y barra desayunador con cocina en un espacio a doble altura con techos de madera que dan ese contraste de materiales haciendo la más acogedora, con la visuales hacia el área de la parrilla para no perderse ninguna actividad del exterior."
                                img={CasaDeCampo} 
                            />
                        </Suspense>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto
                                titulo="Huanchaco"
                                descripcion="BIMARQ3D se complace en presentar el proyecto desarrollando por uno de nuestros equipos de diseño una de nuestras propuestas modelar proyectos bajo la metodología BIM para la construcción en el campo de visualización arquitectónica, ya que esta vivienda es en Trujillo, distrito de huanchaco, donde la construcción fue llevada en Fast-Track donde la toma de decisiones estaba en base a las vistas elaborada en fases tempranas para corregir con nuestro cliente; es evidente que se requería una serie de piscinas a diferentes niveles para acoger a los invitados que llegaran con la expectativa de disfrutar de la privacidad entorno a las piscinas que ayudasen a explorar la casa de dos niveles."
                                img={Huanchaco} 
                            />
                        </Suspense>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Suspense fallback={<Spinner />}>
                            <LazyProyecto
                                titulo="Rosell Piazzini"
                                descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga error voluptas corrupti sunt iste. Voluptates accusantium eos consequuntur error et inventore nostrum assumenda voluptatibus, praesentium neque soluta cum. Laboriosam, veritatis!"
                                img={RosellPiazzini} 
                            />
                        </Suspense>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Proyectos