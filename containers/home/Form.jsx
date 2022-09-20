import React, { useRef } from 'react'

const Form = () => {
    const form = useRef();

    const sendEmail = async event => {
        event.preventDefault();
        const salto = '%0A'
        const number = '573105334254'
        const data = new FormData(form.current);
        const name = data.get('name')
        const phone = data.get('phone')
        const subject = data.get('subject')
        const email = data.get('email')
        const message = data.get('message')
        const textFormatter = `*Formulario Trasteos Gomez Gomez*
            ${salto}${salto}*Nombre:* ${name} 
            ${salto}*Telefono:* ${phone} 
            ${salto}*Asunto:* ${subject} 
            ${salto}*Email:* ${email} 
            ${salto}*Mensaje:* ${message}`

        window.open(`https://wa.me/${number}?text=${textFormatter}`)
        form.current.reset()
    }

    return (
        <>
            <div className="row" id="contact">
                <div className="col-md-12">
                    <div className="section-title">
                        <h5>COTIZACIONES Y PREGUNTAS.</h5>
                        <h2>
                            FORMULARIO DE CONTACTO
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container-fluid shadow-lg wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="row text-white flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-6 p-4 p-sm-5 p-md-5 text-md-left">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col">
                                    <input type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Nombre*"
                                    />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email*"
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col">
                                    <input type="text"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Telefono"
                                    />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Asunto"
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        style={{ resize: "none" }}
                                        rows="5"
                                        placeholder="Mensaje*"
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <button
                                    type="submit"
                                    className="button home-btn-1 js-scroll"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-lg-6 d-flex">
                        <picture>
                            <source srcSet="/assets/img/8.webp" />
                            <img
                                loading="lazy"
                                className="img-fluid"
                                src="/assets/img/8.webp"
                                alt="trasteos gomez gomez"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form