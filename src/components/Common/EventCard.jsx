import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist
} from '../../redux/actions/profileActions';

const LoginPrompt = (props) => {
	return (
		<div className='login-prompt' tabIndex='-1'>
			<div className='content'>
				<h6 className='header'>You must be loggedin to proceed</h6>
				<Link
					to={{ pathname: '/login', referrer: props.referrer }}
					className='redirect-link'
				>
					Login
				</Link>
				<Link
					to={{ pathname: '/register', referrer: props.referrer }}
					className='redirect-link'
				>
					Register
				</Link>
			</div>
		</div>
	);
};

const EventCard = (props) => {
	const { id, title, description, image, scheduled_date, ticket_price } = props.event;
	const referrer = useLocation().pathname;

	return (
		<div
			title={title}
			className='event-card'
			style={
				props.lazyLoadBI
					? { '--background': `url(${image})` }
					: { backgroundImage: `url(${image})` }
			}
		>
			<div className='top-details'>
				<div className='ticket-price'>
					{ticket_price ? (
						<span style={{ color: 'var(--color-semantic-2)' }}>${ticket_price}</span>
					) : (
						<span style={{ color: 'var(--color-secondary-2)' }}>FREE</span>
					)}
				</div>

				{!props.isAuthenticated ? (
					<>
						<div className='action-icons not-authenticated' tabIndex='-1'>
							<span title='Add to calendar' className='details-icon'>
								<i className='far fa-calendar-alt'></i>
							</span>
							<span title='Add to wishlist' className='details-icon heart-icon'>
								<i className='far fa-heart'></i>
							</span>
						</div>
						<LoginPrompt referrer={referrer} />
					</>
				) : (
					<div className='action-icons'>
						<span
							title='Add to calendar'
							className='details-icon'
							onClick={() => {
								console.log('add to calendar');
							}}
						>
							<i className='far fa-calendar-alt'></i>
						</span>

						{!props.event_wishlist?.includes(id) ? (
							<span
								title='Add to wishlist'
								className='details-icon heart-icon'
								onClick={() => {
									props.addToWishlist(id, () => {
										props.getSelfProfile();
									});
								}}
							>
								<i className='far fa-heart'></i>
							</span>
						) : (
							<span
								title='Remove from wishlist'
								className='details-icon heart-icon'
								onClick={() => {
									props.removeFromWishlist(id, () => {
										props.getSelfProfile();
									});
								}}
							>
								<i className='fas fa-heart'></i>
							</span>
						)}
					</div>
				)}
			</div>

			<Link to={`/events/${id}`}>
				<div className='bottom-details'>
					<div className='date'>
						<p className='month'>SEP</p>
						<p className='day'>18</p>
					</div>
					<div>
						<p className='title'>{title}</p>
						<p className='description'>{description?.substring(0, 100)}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	event_wishlist: state.profileState.profile?.event_wishlist
});

export default connect(mapStateToProps, {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist
})(EventCard);
