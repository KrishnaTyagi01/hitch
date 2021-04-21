import EventCardsContainer from '../Common/EventCardsContainer';

const HostedEvents = (props) => {
	return (
		<section className='hostedEvents'>
			<div className='hostedEvents__upper'>
				<span className='hostedEvents__upper--heading'>Hosted Events</span>
				<button className='hostedEvents__upper--btn'>Know More</button>
			</div>
			{props.hostedEvents ? (
				props.hostedEvents.length === 0 ? (
					<div className='page-text'>No events found</div>
				) : (
					<EventCardsContainer events={props.hostedEvents} />
				)
			) : (
				<div className='page-text'>No events found</div>
			)}
		</section>
	);
};

export default HostedEvents;
