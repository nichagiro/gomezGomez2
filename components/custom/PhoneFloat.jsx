import { CELL_PHONES, PHONES } from 'global/contact'
import React from 'react'

const PhoneFloat = () => {
	return (
		<div className="dropend">
			<button className=" d-flex call align-items-center justify-content-center wow bounce" type="button"
				id="contactMenuPhone" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="fas fa-phone-alt fa-2x"></i>
			</button>
			<ul className="dropdown-menu dropdown-menu-dark mx-2" aria-labelledby="contactMenuPhone">
				{
					PHONES.map(number => (
						<li className="text-center" key={number}>
							<a href={`tel:602${number}`} className="text-white">
								<i className="fa fa-phone-square" /> {number}
							</a>
						</li>
					))
				}
				{
					CELL_PHONES.map(number => (
						<li className="text-center" key={number}>
							<a href={`tel:${number}`} className="text-white">
								<i className="fa fa-phone-square" /> {number}
							</a>
						</li>
					))
				}

			</ul>
		</div>
	)
}

export default PhoneFloat