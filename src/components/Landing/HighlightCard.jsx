import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'moment';

import { addToWishlist, removeFromWishlist } from '../../redux/actions/profileActions';
import { activateLoginPrompt } from '../../redux/actions/userActions';

const HighlightCard = (props) => {
	const { id, location, scheduled_date, scheduled_time } = props.event;

	return (
		<div className='highlightCard'>
			<div className='highlightCard__upper'>
				<div className='highlightCard__detail'>
					<p className='highlightCard__detail--title'>
						{`${Moment(scheduled_date).format('D')} 
						${Moment(scheduled_date).format('MMM')}`}
					</p>
					<p className='highlightCard__detail--text'>Date</p>
				</div>
				{/* <div className='vertical-line'></div> */}
				<div className='highlightCard__detail'>
					<p className='highlightCard__detail--title'>
						{location ? location?.toUpperCase() : '-'}
					</p>
					<p className='highlightCard__detail--text'>Location</p>
				</div>
				{/* <div className='vertical-line'></div> */}
				<div className='highlightCard__detail'>
					<p className='highlightCard__detail--title'>
						{Moment(scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
						{/* {scheduled_time} */}
					</p>
					<p className='highlightCard__detail--text'>Time</p>
				</div>
			</div>

			<div className='highlightCard__lower'>
				{!props.isAuthenticated ? (
					<div className='highlightCard__lower--buttons'>
						<button
							title='Add to wishlist'
							className='highlightCard__lower--button'
							onClick={props.activateLoginPrompt}
						>
							<i className='far fa-heart heart-icon'></i>
						</button>

						<button
							title='Add to calendar'
							className='highlightCard__lower--button'
							onClick={props.activateLoginPrompt}
						>
							<i className='far fa-calendar-alt'></i>
						</button>
					</div>
				) : (
					<div className='highlightCard__lower--buttons'>
						{!props.wishlist?.includes(id) ? (
							<button
								title='Add to wishlist'
								className='highlightCard__lower--button'
								onClick={() => {
									props.addToWishlist(id);
								}}
							>
								<i className='far fa-heart heart-icon'></i>
							</button>
						) : (
							<button
								title='Remove from wishlist'
								className='highlightCard__lower--button'
								onClick={() => {
									props.removeFromWishlist(id);
								}}
							>
								<i className='fas fa-heart heart-icon'></i>
							</button>
						)}

						<button
							title='Add to calendar'
							className='highlightCard__lower--button'
							onClick={() => {
								console.log('add to calendar');
							}}
						>
							<i className='far fa-calendar-alt'></i>
						</button>
					</div>
				)}

				<div className='line'></div>
				<Link
					to={{
						pathname: `/event/${id}`,
						state: { event: props.event }
					}}
					className='know'
				>
					KNOW MORE
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	wishlist: state.profileState.wishlist
});

export default connect(mapStateToProps, {
	addToWishlist,
	removeFromWishlist,
	activateLoginPrompt
})(HighlightCard);
