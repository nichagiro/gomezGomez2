import React from 'react'

const History = () => {
    return (
        <section id="about" className="featured-services section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h5>Sirviendo por más de 20 años.</h5>
                            <h2>
                                Conócenos
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="text-left">
                            <p>
                                Trasteos Gómez Gómez es una empresa vallecaucana con más de 20 años en el mercado,
                                ofreciendo el servicio de mudanzas, bodegaje y embalaje a nivel local y nacional.
                                Deseamos brindar un servicio íntegro, eficiente y oportuno para ti.
                            </p>
                            <div className="row advantages">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                                    <h5>Responsables</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                                    <h5>Confiables</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                                    <h5>Dedicados</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                                    <h5>Profesionales</h5>
                                </div>
                            </div>
                            <a href="#contact" className="button home-btn-1 js-scroll wow slideInRight">
                                Cotizar
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <picture>
                            <source srcSet="/assets/img/9.webp" type="image/webp" />
                            <img
                                loading="lazy"
                                className="img-fluid rounded"
                                src="/assets/img/9.webp"
                                alt="service image"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History