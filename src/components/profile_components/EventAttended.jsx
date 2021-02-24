import EventCard from '../Common/EventCard';

const EventAttended = (props) => {
	return (
		<div className='eventattended'>
			<div className='eventattended__upper'>
				<span className='eventattended__upper--heading'>Events Attended</span>
				<button className='eventattended__upper--btn'>Know More</button>
			</div>
			<div className='eventattended__cards'>
				{props.dummyEvents.map((event) => (
					<EventCard event={event} />
				))}
			</div>
		</div>
	);
};

export default EventAttended;
