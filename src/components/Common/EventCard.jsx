const EventCard = (props) => {
	const { title, description, image, scheduled_date, ticket_price } = props.event;
	return (
		<div
			title={title}
			className='event-card-new'
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className='top-details'>
				<div className='ticket-price'>
					{ticket_price ? (
						<span style={{ color: 'var(--color-semantic-2)' }}>${ticket_price}</span>
					) : (
						<span style={{ color: 'var(--color-secondary-2)' }}>FREE</span>
					)}
				</div>
				<div className='action-icons'>
					<div>
						<span className='details-icon'>
							<i className='far fa-calendar-alt'></i>
						</span>
						<span className='details-icon' style={{ color: 'var(--color-semantic-1)' }}>
							<i className='far fa-heart'></i>
						</span>
					</div>
				</div>
			</div>
			<div className='bottom-details'>
				<div className='date'>
					<p className='month'>SEP</p>
					<p className='day'>18</p>
				</div>
				<div>
					<p className='title'>{title}</p>
					<p className='description'>{description.substring(0, 120)}</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
