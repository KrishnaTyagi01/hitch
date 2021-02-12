import React from 'react';
import copyIcon from '../../icons/copyIcon.svg';
import shareIcon from '../../icons/shareIcon.svg';
import Moment from 'moment';

const EventDetail = (props) => {

	// console.log();

	return (
		<div className="eventdetails">
			<div className="eventdetails__schedule">
				<h3 className="eventdetails__schedule--head">SCHEDULE</h3>

				<div className="eventdetails__timing">
					<span className="eventdetails__timing--text">START TIME</span>
					<p className="eventdetails__timing--time">{(Moment(props.event.scheduled_time, ["hh:mm:ss"]).format("hh:mm A"))}</p>
				</div>

				<div className="eventdetails__duration">
					<span className="eventdetails__duration--text">DURATION DAYS</span>
					<p className="eventdetails__duration--length">{props.event.duration_days}</p>
				</div>

			</div>

			<div className="eventdetails__price">
				<h3 className="eventdetails__price--head">PRICE</h3>
				<span className="eventdetails__price--body">THIS EVENT IS</span>
				<p className="eventdetails__price--cost">{props.event.ticket_price === 0 ? 'FREE' : props.event.ticket_price}</p>
			</div>

			<div className="eventdetails__visit">
				<h3 className="eventdetails__visit--head">VISIT ORGANISERS</h3>

				<a href="#" className="eventdetails__visit--link">https://coldplay.live/mumbai_IN_2020</a>

				<div className="eventdetails__visit--buttons">
					<button className="eventdetails__visit--sharebtn" >
						share
						<img className="eventdetails__visit--shareicon" src={shareIcon} alt="share icon" />
					</button>
					<button className="eventdetails__visit--copybtn" >
						copy
						<img className="eventdetails__visit--copyicon" src={copyIcon} alt="share icon" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default EventDetail;