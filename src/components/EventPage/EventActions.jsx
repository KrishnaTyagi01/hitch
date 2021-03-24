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
import { useRef, useState } from 'react/cjs/react.development';

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

const EventActions = (props) => {
	const [alreadyInCalendar, setAlreadyInCalendar] = useState(false);

	return (
		<div className='event-actions'>
			<div className='ticket-card'>
				<div className='wrapper'>
					<h5 className='category'>Featured in Concerts</h5>

					<div className='eventname'>
						<h3 className='hostname'>{props.event?.title}</h3>
						<span className='tourname'></span>
						<span className='tourdate'></span>
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
									: `₹ ${props.event?.ticket_price}`}
							</span>
						</div>
						{/* <div className='starts-in'>
							<span className='text'>EVENT STARTS IN</span>
							<span className='timer'>01D: 08H: 30M: 25S</span>
						</div> */}
					</div>

					{!props.isAuthenticated ? (
						<button className='register-button' onClick={props.activateLoginPrompt}>
							Register for this event
						</button>
					) : (
						<>
							{props.upcoming ? (
								<>
									{!props.upcoming.includes(props.event.id) ? (
										<Link
											to={{
												pathname: `/event/${props.event?.id}/register`,
												event: props.event
											}}
										>
											<button className='register-button'>Register for this event</button>
										</Link>
									) : (
										<>
											<p style={{ margin: '10px auto auto' }}>Already registered</p>
											<Link to={{ pathname: `/event/${props.event?.id}/ticket` }}>
												<button className='register-button'>View Ticket</button>
											</Link>
										</>
									)}
								</>
							) : null}
						</>
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
					{/* HERE MAKE AN OPTION FOR REMOVE FROM CALENDAR */}
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
	wishlist: state.profileState.wishlist,
	upcoming: state.profileState.upcoming
});


export default connect(mapStateToProps, {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist,
	activateLoginPrompt
})(EventActions);
