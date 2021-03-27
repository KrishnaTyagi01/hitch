import EventCardsContainer from '../Common/EventCardsContainer';

const UpcomingEvents = (props) => {
	const events = props.upcomingEvents?.map((item) => item.event);

	return (
		<div className='upcomingevents'>
			<div className='upcomingevents__upper'>
				<span className='upcomingevents__upper--heading'>Upcoming Events</span>
				<button className='upcomingevents__upper--btn'>Know More</button>
			</div>
			{events ? (
				events.length === 0 ? (
					<div className='page-text'>You don't have any upcoming events</div>
				) : (
					<EventCardsContainer events={events} />
				)
			) : (
				<div className='page-text'>You don't have any upcoming events</div>
			)}
		</div>
	);
};

export default UpcomingEvents;
