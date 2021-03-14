import EventCard from '../Common/EventCard';

const EventsAttended = (props) => {
	return (
		<div className='attendedEvents'>
			<div className='attendedEvents__upper'>
				<span className='attendedEvents__upper--heading'>Events Attended</span>
				<button className='attendedEvents__upper--btn'>Know More</button>
			</div>
			<div className='attendedEvents__cards'>
				{props.attendedEvents ? (
					props.attendedEvents.length === 0 ? (
						<div className='page-text'>You haven't attended any events yet</div>
					) : (
						<>
							{props.attendedEvents.map((event) => (
								<EventCard event={event} />
							))}
						</>
					)
				) : (
					<div className='page-text'>You haven't attended any events yet</div>
				)}
			</div>
		</div>
	);
};

export default EventsAttended;
