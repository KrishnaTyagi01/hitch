import EventCardsContainer from '../Common/EventCardsContainer';

const WishlistEvents = (props) => {
	return (
		<div className='wishlistEvents'>
			<div className='wishlistEvents__upper'>
				<span className='wishlistEvents__upper--heading'>Wishlist</span>
				<button className='wishlistEvents__upper--btn'>Know More</button>
			</div>
			{props.wishlistEvents ? (
				props.wishlistEvents.length === 0 ? (
					<div className='page-text'>You haven't added anything to wishlist so far</div>
				) : (
					<EventCardsContainer events={props.wishlistEvents} />
				)
			) : (
				<div className='page-text'>You haven't added anything to wishlist so far</div>
			)}
		</div>
	);
};

export default WishlistEvents;
