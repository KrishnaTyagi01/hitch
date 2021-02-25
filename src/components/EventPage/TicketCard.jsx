import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';

const currency_symbols = {
	USD: '$', // US Dollar
	EUR: '€', // Euro
	GBP: '£', // British Pound Sterling
	ILS: '₪', // Israeli New Sheqel
	INR: '₹', // Indian Rupee
	JPY: '¥', // Japanese Yen
	KRW: '₩', // South Korean Won
	NGN: '₦', // Nigerian Naira
	PHP: '₱', // Philippine Peso
	PLN: 'zł', // Polish Zloty
	PYG: '₲', // Paraguayan Guarani
	THB: '฿', // Thai Baht
	UAH: '₴', // Ukrainian Hryvnia
	VND: '₫' // Vietnamese Dong
};

const EventCard = (props) => {
	// const price =
	// 	props.event?.ticket_price === 0
	// 		? 'FREE'
	// 		: currency_symbols['INR'] + props.event?.ticket_price;

	return (
		<div className='ticket-card'>
			<div className='wrapper'>
				<span className='category'>Featured in Concerts</span>

				<div className='eventname'>
					<span className='hostname'>{props.event?.title} </span>
					<span className='tourname'>Viva La Viva Tour</span>
					<span className='tourdate'> Mumbai-2021</span>
				</div>
				<div className='datewrapper'>
					<span className='date'>DATE</span>
					<p className='eventdate'>
						{Moment(props.event?.scheduled_date).format('Do MMMM YYYY')}
					</p>
				</div>

				<div className='timewrapper'>
					<span className='start'>START TIME</span>
					<p className='eventtime'>
						{Moment(props.event?.scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
					</p>
				</div>

				<div className='lower'>
					<div className='entrybox'>
						<span className='entry'>ENTRY FEE</span>
						<span className='entrytype'>
							{props.event?.ticket_price === 0
								? 'FREE'
								: `${currency_symbols['INR']} + ${props.event?.ticket_price}`}
						</span>
					</div>
					<div className='time'>
						<span className='start'> EVENT STARTS IN</span>
						<span className='entrytime'>01D: 08H: 30M: 25S</span>
					</div>
				</div>

				<div className='registerBtn'>
					<Link
						style={{ width: '100%' }}
						to={{
							pathname: '/register-event',
							state: {
								event: props.event
							}
						}}
					>
						<button type='button' className='button'>
							Register for this event
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
