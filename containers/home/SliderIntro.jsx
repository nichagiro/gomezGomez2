import React from 'react'

const SliderIntro = () => {
    return (
        <div id="home" className="slider slider-prlx">
            <div className="swiper-container parallax-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="bg-img valign" data-background="assets/img/2.webp" data-overlay-dark="5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 offset-lg-2">
                                        <div className="caption text-center">
                                            <h2>Mudanzas de inmediato</h2>
                                            <h1><span>Ágiles</span> y Efectivos</h1>
                                            <h3>Atención al usuario, agilidad de trámite, efectividad del servicio, acceso a
                                                tu bolsillo, somo tu mejor opción. </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-img valign" data-background="/assets/img/4.webp" data-overlay-dark="5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 offset-lg-2">
                                        <div className="caption text-center">
                                            <h2>Servicio de calidad</h2>
                                            <h1>
                                                <span>Seguro</span>
                                                y confianza
                                            </h1>
                                            <h3>Especialistas en mudanzas, bodegaje y embalaje a nivel local y nacional.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control-text">
                    <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                        <span className="arrow prv"></span>
                    </div>
                    <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                        <span className="arrow nxt"></span>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default SliderIntro