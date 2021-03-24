import { connect } from 'react-redux';
import Moment from 'moment';
import { Link } from 'react-router-dom';

import {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist
} from '../../redux/actions/profileActions';
import { activateLoginPrompt } from '../../redux/actions/userActions';
import AddToCalendar from './AddToCalendar/AddToCalendar';
import { useState } from 'react';


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

const SmallEventActions = (props) => {
	const [alreadyInCalendar, setAlreadyInCalendar] = useState(false);

	return (
		<div className='small-event-actions'>
			<div className='ticket-card'>
				<div className='wrapper'>
					<h5 className='category'>Featured in Concerts</h5>

					<div className='eventname'>
						<span className='hostname'>{props.event?.title} </span>
						<span className='tourname'>Viva La Viva Tour</span>
						<span className='tourdate'> Mumbai-2021</span>
					</div>
					<div className='datewrapper'>
						<span className='text'>DATE</span>
						<p className='eventdate'>
							{Moment(props.event?.scheduled_date).format('Do MMMM YYYY')}
						</p>
					</div>

					<div className='start-time'>
						<span className='text'>START TIME</span>
						<p className='time'>
							{Moment(props.event?.scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
						</p>
					</div>

					<hr />

					<div className='lower'>
						<div className='entry-fee'>
							<span className='text'>ENTRY FEE</span>
							<span className='fee'>
								{props.event?.ticket_price === 0
									? 'FREE'
									: `${currency_symbols['INR']} ${props.event?.ticket_price}`}
							</span>
						</div>
						<div className='starts-in'>
							<span className='text'>EVENT STARTS IN</span>
							<span className='timer'>01D: 08H: 30M: 25S</span>
						</div>
					</div>

					{!props.isAuthenticated ? (
						<button className='register-button' onClick={props.activateLoginPrompt}>
							Register for this event
						</button>
					) : (
						<Link
							to={{
								pathname: `/event/${props.event?.id}/register`,
								event: props.event
							}}
						>
							<button className='register-button'>Register for this event</button>
						</Link>
					)}
				</div>
			</div>

			{!props.isAuthenticated ? (
				<>
					<button className='action-button' onClick={props.activateLoginPrompt}>
						<i className='far fa-calendar-alt action-button__icon'></i>
						Add to Calender
					</button>
					<button className='action-button' onClick={props.activateLoginPrompt}>
						<i className='far fa-heart action-button__icon'></i>
						Add to Wishlist
					</button>
				</>
			) : (
				<>
					<button className='action-button' onClick={() => AddToCalendar(props.event, setAlreadyInCalendar)}>
						<i className='far fa-calendar-alt action-button__icon'></i>
						Add to Calender
					</button>
					{
						alreadyInCalendar &&
						<div className="alreadyInCalendar">
							Already in Calendar
						</div>
					}

					{!props.wishlist?.includes(props.event?.id) ? (
						<button
							className='action-button'
							onClick={() => {
								props.addToWishlist(props.event?.id);
							}}
						>
							<i className='far fa-heart action-button__icon'></i>
							Add to Wishlist
						</button>
					) : (
						<button
							className='action-button'
							onClick={() => {
								props.removeFromWishlist(props.event?.id);
							}}
						>
							<i className='fas fa-heart action-button__icon'></i>
							Remove from Wishlist
						</button>
					)}
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	wishlist: state.profileState.wishlist
});

export default connect(mapStateToProps, {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist,
	activateLoginPrompt
})(SmallEventActions);
