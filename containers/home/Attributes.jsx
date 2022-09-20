import React from 'react'

const Attributes = () => {
    return (
        < div id="why" className="why-chose section-padding" >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 wow why-chose-service fadeInLeft text-center"
                        data-wow-delay="0.2s">
                        <picture>
                            <source srcSet="/assets/img/team.webp" type="image/webp" />
                            <img loading="lazy" src="/assets/img/team.webp" alt="chose image" />
                        </picture>
                        <h2 className="theme-color">Equipo Dedicado</h2>
                        <p>
                            Trabajadores comprometidos con la labor.<br />
                            Agilidad y velocidad en el servicio.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 wow why-chose-service fadeInLeft text-center"
                        data-wow-delay="0.2s">
                        <picture>
                            <source srcSet="/assets/img/experience.webp" type="image/webp" />
                            <img loading="lazy" src="/assets/img/experience.webp" alt="gomez mudanzas" />
                        </picture>
                        <h2 className="theme-color">Experiencia</h2>
                        <p>Más de 20 años de experiencia.
                            <br />
                            Satisfacción y eficacia.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 wow why-chose-service fadeInLeft text-center"
                        data-wow-delay="0.2s">
                        <picture>
                            <source srcSet="/assets/img/reputation.webp" type="image/webp" />
                            <img loading="lazy" src="/assets/img/reputation.webp" alt=" trasteos cali" />
                        </picture>
                        <h2 className="theme-color">Reputación</h2>
                        <p>
                            Grandes expectativas en nuestros clientes.
                            <br />
                            Formamos lazos de confianza.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Attributes