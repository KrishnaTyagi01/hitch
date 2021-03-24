import EventCard from '../Common/EventCard';

const WishlistEvents = (props) => {
	return (
		<div className='wishlistEvents'>
			<div className='wishlistEvents__upper'>
				<span className='wishlistEvents__upper--heading'>Wishlist</span>
				<button className='wishlistEvents__upper--btn'>Know More</button>
			</div>
			{props.wishlistEvents ? (
				props.wishlistEvents.length === 0 ? (
					<div className='page-text'>You have not added anything to wishlist</div>
				) : (
					<div className='wishlistEvents__cards'>
						{props.wishlistEvents.map((event, i) => (
							<EventCard event={event} key={i} />
						))}
					</div>
				)
			) : (
				<div className='page-text'>You have not added anything to wishlist</div>
			)}
		</div>
	);
};

export default WishlistEvents;
