import EventCard from '../Common/EventCard';
import Loading from '../Common/Loading';

const UpcomingEvents = (props) => {
	const events = props.upcomingEvents?.map((item) => item.event);

	return (
		<div className='upcomingevents'>
			<div className='upcomingevents__upper'>
				<span className='upcomingevents__upper--heading'>Upcoming Events</span>
				<button className='upcomingevents__upper--btn'>Know More</button>
			</div>
			{!props.upcomingEvents ? (
				<Loading />
			) : events === 0 ? (
				<div className='page-text'>No events found</div>
			) : (
				<div className='upcomingevents__cards'>
					{events.map((event, i) => (
						<EventCard event={event} key={i} />
					))}
				</div>
			)}
		</div>
	);
};

export default UpcomingEvents;
