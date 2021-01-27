import React from 'react';
import copyIcon from '../../icons/copyIcon.svg';
import shareIcon from '../../icons/shareIcon.svg';

const EventDetail = () => {
	return (
		<div className="eventdetails">
			<div className="eventdetails__schedule">
				<h3 className="eventdetails__schedule--head">SCHEDULE</h3>

				<div className="eventdetails__timing">
					<span className="eventdetails__timing--text">START TIME</span>
					<p className="eventdetails__timing--time">7:00 PM IST</p>
				</div>
				
				<div className="eventdetails__duration">
					<span className="eventdetails__duration--text">DURATION</span>
					<p className="eventdetails__duration--length">3-4HRS</p>
				</div>

			</div>

			<div className="eventdetails__price">
				<h3 className="eventdetails__price--head">PRICE</h3>
				<span className="eventdetails__price--body">THIS EVENT IS</span>
				<p className="eventdetails__price--cost">FREE</p>
			</div>

			<div className="eventdetails__visit">
				<h3 className="eventdetails__visit--head">VISIT ORGANISERS</h3>

				<a href="#" className="eventdetails__visit--link">https://coldplay.live/mumbai_IN_2020</a>

				<div className="eventdetails__visit--buttons">
					<button className="eventdetails__visit--sharebtn" >
						share
						<img className="eventdetails__visit--shareicon" src={shareIcon} alt="share icon"/>
					</button>
					<button className="eventdetails__visit--copybtn" >
						copy
						<img className="eventdetails__visit--copyicon" src={copyIcon} alt="share icon"/>
					</button>
				</div>
			</div>
		</div>
	)
}

export default EventDetail;