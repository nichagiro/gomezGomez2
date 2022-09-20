import React from 'react'

const api = 'https://wa.me/'

const Whatsapp = ({ number }) => {
    return (
        <a
            href={`${api}${number}`}
            className="whatsapp d-flex align-items-center justify-content-center wow bounce"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Cotiza sin costo"
            target="_blank"
        >
            <i className="fab fa-whatsapp fa-2x"></i>
        </a>
    )
}

export default Whatsapp


Whatsapp.defaultProps = {
    number: 573105334254
}