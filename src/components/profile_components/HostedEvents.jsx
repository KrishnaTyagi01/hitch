import EventCard from '../Common/EventCard';
import Loading from '../Common/Loading';

const HostedEvents = (props) => {
	return (
		<div className='hostedevents'>
			<div className='hostedevents__upper'>
				<span className='hostedevents__upper--heading'>Hosted Events</span>
				<button className='hostedevents__upper--btn'>Know More</button>
			</div>
			{!props.hostedEvents ? (
				<Loading />
			) : props.hostedEvents.length === 0 ? (
				<div className='page-text'>No events found</div>
			) : (
				<div className='hostedevents__cards'>
					{props.hostedEvents.map((event, i) => (
						<EventCard event={event} key={i} />
					))}
				</div>
			)}
		</div>
	);
};

export default HostedEvents;
