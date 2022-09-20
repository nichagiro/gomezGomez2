import React from 'react'

const BannerContact = () => {
    return (
        <div className="book-area my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-2 d-flex justify-content-center justify-content-md-start align-items-center">
                        <div className="footer-copyright-text f-30">
                            <h3 className="fw-bold">Contáctanos</h3>
                        </div>
                    </div>
                    <div className="my-2 d-md-none"></div>
                    <div
                        className="col-12 col-md-8 col-lg-10 text-right text-white f-30 d-flex flex-wrap justify-content-center align-items-center">
                        <a href="tel:6024396831" className="text-white mx-3">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 439 6831
                        </a>
                        <a href="tel:6025244494" className="text-white mx-3">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 524 4494
                        </a>
                        <a href="tel:6024393880" className="text-white mx-3">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 439 3880
                        </a>
                        <a href="tel:3105334254" className="text-white mx-3">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 310 533 4254
                        </a>
                        <a href="tel:3155220780 " className="text-white mx-3">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 315 522 0780
                        </a>
                        <a href="tel:3105334254" className="text-white mx-2">
                            <i className="fa fa-phone-square"></i>
                            &nbsp; 310 533 4254
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerContact