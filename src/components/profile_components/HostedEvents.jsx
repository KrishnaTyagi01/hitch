// import SimilarEventCard from '../event_components/SimilarEventCard';
import EventCard from '../Common/EventCard';

const HostedEvents = (props) => {
	return (
		<div className='hostedevents'>
			<div className='hostedevents__upper'>
				<span className='hostedevents__upper--heading'>Hosted Events</span>
				<button className='hostedevents__upper--btn'>Know More</button>
			</div>
			<div className='hostedevents__cards'>
				{props.hosted_events.map((event) => (
					<EventCard event={event} />
				))}
			</div>
		</div>
	);
};

export default HostedEvents;
