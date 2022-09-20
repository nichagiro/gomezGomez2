import React from 'react'

const Nav = () => {
    return (
        <header className="header-navber-area">
            <nav className="navbar navbar-b navbar-trans navbar-expand-lg" id="mainNav">
                <div className="container top-menu">
                    <a className="navbar-brand js-scroll" href="/">
                        <picture>
                            <source srcSet="/assets/img/0.webp" type="image/webp" />
                            <img loading="lazy" src="/assets/img/0.webp" height="60px" className="white-logo" alt="logo" />
                        </picture>
                        <picture>
                            <source srcSet="/assets/img/0.webp" type="image/webp" />
                            <img loading="lazy" src="/assets/img/0.webp" height="60px" className="black-logo" alt="logo" />
                        </picture>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span></span> <span></span> <span></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link js-scroll active" href="/">INICIO</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll" href="#services">SERVICIOS</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll" href="#about">NOSOTROS</a></li>
                            <li className="nav-item"><a className="nav-link js-scroll" href="#contact">COTIZAR</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav