import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
	var currency_symbols = {
		'USD': '$', // US Dollar
		'EUR': '€', // Euro
		'GBP': '£', // British Pound Sterling
		'ILS': '₪', // Israeli New Sheqel
		'INR': '₹', // Indian Rupee
		'JPY': '¥', // Japanese Yen
		'KRW': '₩', // South Korean Won
		'NGN': '₦', // Nigerian Naira
		'PHP': '₱', // Philippine Peso
		'PLN': 'zł', // Polish Zloty
		'PYG': '₲', // Paraguayan Guarani
		'THB': '฿', // Thai Baht
		'UAH': '₴', // Ukrainian Hryvnia
		'VND': '₫', // Vietnamese Dong
	};

	const price = props.event.ticket_price === 0 ? 'FREE' : currency_symbols['INR'] + props.event.ticket_price;
	return (
		<>
			<div className="eventcard">
				<div className="eventcard__wrapper">
					<span className="eventcard__category">Featured in Concerts</span>

					<div className="eventcard__eventname">
						<span className="eventcard__eventname--hostname">{props.event.title} </span>
						{/* <span className="eventcard__eventname--tourname">Viva La Viva Tour</span>
						<span className="eventcard__eventname--tourdate"> Mumbai-2021</span> */}
					</div>
					<div className="eventcard__datewrapper">
						<span className="eventcard__date">DATE</span>
						<p className="eventcard__eventdate">{Moment(props.event.scheduled_date).format('Do MMMM YYYY')}</p>
					</div>

					<div className="eventcard__timewrapper">
						<span className="eventcard__start">START TIME</span>
						<p className="eventcard__eventtime">{Moment(props.event.scheduled_time, ["hh:mm:ss"]).format("hh:mm A")}</p>
					</div>

					<div className="eventcard__lower">
						<div className="eventcard__lower--entrybox">
							<span className="eventcard__lower--entry">ENTRY</span>
							<span className="eventcard__lower--entrytype">{price}</span>
						</div>

						{/* <div className="eventcard__lower--time">
							<span className="eventcard__lower--start"> EVENT STARTS IN</span>
							<span className="eventcard__lower--entrytime">01D: 08H: 30M: 25S</span>
						</div> */}
					</div>

					<div className="registerBtn">
						<Link style={{ width: "100 %" }} to={{
							pathname: "/register-event",
							state: {
								event: props.event,
							}
						}}>
							<button type="button" className="eventcard__button">Register for this event</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}


export default EventCard;