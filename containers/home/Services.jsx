import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services-area bg-gray section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h5>Servicios</h5>
                            <h2>
                                Nuestros Servicios
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="services-slide0" className="owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="row">
                                <div className="col-md-6 col-lg-4 animate__animated  animate__backInLeft">
                                    <div className="services-single-item bg-1 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="services-content pb-4">
                                            <picture>
                                                <source srcSet="/assets/img/8.webp" type="image/webp" />
                                                <img
                                                    className="img-fluid"
                                                    loading="lazy"
                                                    src="/assets/img/8.webp"
                                                    alt="service image"
                                                />
                                            </picture>
                                            <h5>MUDANZAS</h5>
                                            <p>Transporte de mercancías a nivel local, nacional e internacional.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 animate__animated  animate__backInUp">
                                    <div className="services-single-item bg-2 wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="services-content pb-4">
                                            <picture>
                                                <source srcSet="/assets/img/6.webp" type="image/webp" />
                                                <img
                                                    loading="lazy"
                                                    src="/assets/img/6.webp"
                                                    alt="service image"
                                                />
                                            </picture>
                                            <h5>BODEGAJE</h5>
                                            <p>Logística desde la manipulación hasta la llegada al destino.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow bounceInUp">
                                    <div className="services-single-item bg-3 wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="services-content pb-4">
                                            <picture>
                                                <source srcSet="/assets/img/7.webp" type="image/webp" />
                                                <img
                                                    loading="lazy"
                                                    src="/assets/img/7.webp"
                                                    alt="service image"
                                                />
                                            </picture>
                                            <h5>EMBALAJE</h5>
                                            <p>Todo tipo de material de calidad para proteger tus mercancías.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services