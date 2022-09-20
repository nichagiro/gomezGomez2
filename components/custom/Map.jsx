import React from 'react'

const api = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.049282233616!2d-76.505776!3d3.467905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd67d65a2a5fbe521!2sEmpaques%20y%20Trasteos%20Gomez%20Gomez!5e0!3m2!1ses-419!2sus!4v1642823264993!5m2!1ses-419!2sus"

const Map = ({ width, height, lazy, style }) => {
    return (
        <iframe
            src={api}
            width={width}
            height={height}
            style={style}
            loading={lazy ? 'lazy' : 'auto'}
            allowFullScreen
        />
    )
}

export default Map

Map.defaultProps = {
    width: '100%',
    height: 450,
    style: {},
    lazy: true
}