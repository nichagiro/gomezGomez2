import React from 'react'

const PhoneFloat = () => {
    return (
        <div className="dropend">
            <button className=" d-flex call align-items-center justify-content-center wow bounce" type="button"
                id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-phone-alt fa-2x"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark mx-2" aria-labelledby="dropdownMenuButton">
                <li className="text-center">
                    <a href="tel:6024396831" className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp; 439 6831
                    </a>
                </li>
                <li className="text-center">
                    <a href="tel:6025244494" className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp; 524 4494
                    </a>
                </li>
                <li className="text-center">
                    <a href="tel:6024393880" className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp;439 3880
                    </a>
                </li>
                <li className="text-center">
                    <a href="tel:3105334254" className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp;310 533 4254
                    </a>
                </li>
                <li className="text-center">
                    <a href="tel:3105334254" className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp; 310 533 4254
                    </a>
                </li>
                <li className="text-center">
                    <a href="tel:3155220780 " className="text-white">
                        <i className="fa fa-phone-square"></i>
                        &nbsp; 315 522 0780
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PhoneFloat