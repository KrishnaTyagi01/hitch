import registrationStamp from '../../icons/Events/registrationStamp.png';

const EventTicket = (props) => {
	const {
		num_of_participants,
		event: { title, scheduled_time, scheduled_date, ticket_price }
	} = props.ticket ?? {};
	const { name, email, phone } = props.profile ?? {};

	return (
		<div className='eventTicket'>
			<img
				src={registrationStamp}
				alt='registration stamp'
				className='registered-stamp'
			/>
			<h2 className='eventTicket__title'>{title}</h2>
			<div className='eventTicket__details'>
				<div className='eventTicket__details__left'>
					<div className='eventTicket__field'>
						<p className='eventTicket__field--name'>Name</p>
						<p className='eventTicket__field--value'>{name}</p>
					</div>
					<div className='eventTicket__field'>
						<p className='eventTicket__field--name'>Email</p>
						<p className='eventTicket__field--value'>{email}</p>
					</div>
					<div className='eventTicket__field'>
						<p className='eventTicket__field--name'>Phone</p>
						<p className='eventTicket__field--value'>{phone}</p>
					</div>
					<div className='eventTicket__field'>
						<p className='eventTicket__field--name'>Price</p>
						<p className='eventTicket__field--value'>
							{ticket_price ? (
								<span>
									₹{ticket_price} x {num_of_participants} = ₹
									{ticket_price * num_of_participants}
								</span>
							) : (
								<span>FREE</span>
							)}
						</p>
					</div>
				</div>
				<div className='eventTicket__details__right'>
					<div className='eventTicket__field'>
						<p className='eventTicket__field--name'>Time</p>
						<p className='eventTicket__field--value'>Starting {scheduled_time}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventTicket;
