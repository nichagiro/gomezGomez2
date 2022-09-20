import React from 'react'

const Footer = () => {
    return (
        <footer className="site-footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h2>Trasteos Gómez Gómez</h2>
                        <p className="text-justify">
                            Te invitamos para que nos busques por cualquiera de estos medios de contacto, sigue nuestro
                            contenido
                            en las redes sociales, pregunta lo que necesites que cualquiera de nuestros asesores se
                            pondrá en
                            contacto y te ayudara con tu problema. Estamos para brindarte la solución que tanto
                            necesitas.
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-6 d-flex justify-content-center">
                        <div>
                            <h2>Contacto</h2>
                            <div className="contact-store-location-box">
                                <div className="single-store-location">
                                    <p>
                                        <i className="fa fa-envelope"></i> &nbsp; &nbsp;
                                        <a
                                            href="mailto:gomezgomeztrasteos@gmail.com">
                                            gomezgomeztrasteos@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <i className="fa fa-map"></i> &nbsp;
                                        Carrera 1G #46A - 23, Salomia
                                    </p>
                                    <p>
                                        <i className="fa fa-phone"></i> &nbsp; &nbsp;
                                        <a>
                                            <span className='me-1'>
                                                4396831  
                                            </span>
                                            <span className='me-1'>
                                                - 5244494
                                            </span>
                                            <span className='me-1'>
                                                - 4393880
                                            </span>
                                            <span className='me-1 d-none d-lg-inline'>
                                                - 3155703421
                                            </span>
                                            <span className='me-1 d-none d-lg-inline'>
                                                - 3155220780
                                            </span>
                                            <span className=' d-none d-lg-inline'>
                                                - 3105334254
                                            </span>
                                        </a>
                                    </p>
                                    <p>
                                        <i className="fas fa-file-pdf"></i> &nbsp; &nbsp;
                                        <a target="_blank"
                                            href="assets/files/protocolobioseguridad.pdf"
                                        >
                                            Protocolo de bioseguridad
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">TRASTEOS GÓMEZ GÓMEZ © 2021 - Designed by
                            <a href="https://overweb.com.co" target="_blank"> OVERWEB</a>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a
                                    className="facebook"
                                    target="_blank"
                                    href="https://www.facebook.com/Empaques-Trasteos-G%C3%B3mez-G%C3%B3mez-209996329403407/"
                                >
                                    <i className="fab fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dribbble"
                                    target="_blank" href="https://www.instagram.com/trasteosgomezg/"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer