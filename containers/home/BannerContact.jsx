import { CELL_PHONES, PHONES } from 'global/contact'
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
					<div className="col-12 col-md-8 col-lg-10 text-right text-white f-30 d-flex flex-wrap justify-content-center align-items-center">
						{
							PHONES.map(item => (
								<a href={`tel:602${item}`} className="text-white mx-3" key={item}>
									<i className="fa fa-phone-square me-1" /> {item}
								</a>
							))
						}
						{
							CELL_PHONES.map(item => (
								<a href={`tel:${item}`} className="text-white mx-3" key={item}>
									<i className="fa fa-phone-square me-1" /> {item}
								</a>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerContact