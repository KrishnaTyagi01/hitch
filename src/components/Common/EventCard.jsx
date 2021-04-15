import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'moment';

import {
	getSelfProfile,
	addToWishlist,
	removeFromWishlist
} from '../../redux/actions/profileActions';
import { activateLoginPrompt } from '../../redux/actions/userActions';

const EventCard = (props) => {
	const { id, title, description, image, scheduled_date, ticket_price } = props.event;

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
						<span style={{ color: 'var(--color-semantic-2)' }}>₹{ticket_price}</span>
					) : (
						<span style={{ color: 'var(--color-secondary-2)' }}>FREE</span>
					)}
				</div>

				{!props.isAuthenticated ? (
					<div className='action-icons'>
						<button
							title='Add to calendar'
							className='details-icon'
							onClick={props.activateLoginPrompt}
						>
							<i className='far fa-calendar-alt'></i>
						</button>
						<button
							title='Add to wishlist'
							className='details-icon heart-icon'
							onClick={props.activateLoginPrompt}
						>
							<i className='far fa-heart'></i>
						</button>
					</div>
				) : (
					<div className='action-icons'>
						<button
							title='Add to calendar'
							className='details-icon'
							onClick={() => {
								console.log('add to calendar');
							}}
						>
							<i className='far fa-calendar-alt'></i>
						</button>

						{!props.wishlist?.includes(id) ? (
							<button
								title='Add to wishlist'
								className='details-icon heart-icon'
								onClick={() => {
									props.addToWishlist(id);
								}}
							>
								<i className='far fa-heart'></i>
							</button>
						) : (
							<button
								title='Remove from wishlist'
								className='details-icon heart-icon'
								onClick={() => {
									props.removeFromWishlist(id);
								}}
							>
								<i className='fas fa-heart'></i>
							</button>
						)}
					</div>
				)}
			</div>

			<Link
				to={{
					pathname: `/event/${id}`,
					state: { event: props.event }
				}}
			>
				<div className='bottom-details'>
					<div className='event-card__date'>
						<p className='month'>{Moment(scheduled_date).format('MMM')}</p>
						<p className='day'>{Moment(scheduled_date).format('D')}</p>
					</div>
					<div className='event-card__text'>
						<p className='title'>{title?.substring(0, 40)}</p>
						<p className='description'>
							{description?.length < 40
								? description
								: `${description?.substring(0, 40)}...`}
						</p>
					</div>
				</div>
			</Link>
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
})(EventCard);
