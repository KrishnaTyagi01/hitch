import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import EventCardsContainer from '../Common/EventCardsContainer';

const EventsPage = (props) => {
	const [events, setEvents] = useState([]);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	const makeActive = (currRef) => {
		ref1.current.className = 'upper__container--btn';
		ref2.current.className = 'upper__container--btn';
		ref3.current.className = 'upper__container--btn';
		ref4.current.className = 'upper__container--btn';
		currRef.current.className = 'upper__container--btnactive';
	};

	const Bookmark = () => {
		makeActive(ref1);
		setEvents(props.wishlistEvents);
	};
	const Hosted = () => {
		makeActive(ref2);
		setEvents(props.hostedEvents);
	};
	const Upcoming = () => {
		makeActive(ref3);
		setEvents(props.upcomingEvents.map((item) => item.event));
	};
	const Attended = () => {
		makeActive(ref4);
		setEvents(props.attendedEvents.map((item) => item.event));
	};

	useEffect(() => {
		setEvents(props.wishlistEvents);
	}, [props.wishlistEvents]);

	return (
		<div className='eventsPage'>
			<section className='upper'>
				<div className='upper__container'>
					<h3 className='upper__container--head'>My Events</h3>
					<div className='upper__container--category'>
						<button ref={ref1} onClick={Bookmark} className='upper__container--btnactive'>
							Bookmarks
						</button>
						<button ref={ref2} onClick={Hosted} className='upper__container--btn'>
							Your Hosted Events
						</button>
						<button ref={ref3} onClick={Upcoming} className='upper__container--btn'>
							Upcoming Events
						</button>
						<button ref={ref4} onClick={Attended} className='upper__container--btn'>
							Events Attended
						</button>
					</div>
				</div>
			</section>
			<section className='eventsPage__content'>
				<EventCardsContainer events={events} />
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	hostedEvents: state.profileState.hostedEvents,
	attendedEvents: state.profileState.attendedEvents,
	upcomingEvents: state.profileState.upcomingEvents,
	wishlistEvents: state.profileState.wishlistEvents
});

export default connect(mapStateToProps)(EventsPage);
