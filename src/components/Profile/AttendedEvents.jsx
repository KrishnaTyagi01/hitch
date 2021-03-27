import EventCardsContainer from '../Common/EventCardsContainer';

const EventsAttended = (props) => {
	const events = props.attendedEvents?.map((item) => item.event);

	return (
		<div className='attendedEvents'>
			<div className='attendedEvents__upper'>
				<span className='attendedEvents__upper--heading'>Attended Events</span>
				<button className='attendedEvents__upper--btn'>Know More</button>
			</div>
			{events ? (
				events.length === 0 ? (
					<div className='page-text'>You haven't attended any events yet</div>
				) : (
					<EventCardsContainer events={events} />
				)
			) : (
				<div className='page-text'>You haven't attended any events yet</div>
			)}
		</div>
	);
};

export default EventsAttended;
