import { useState, useEffect } from 'react';
import axios from 'axios';

import TicketCard from '../components/EventPage/TicketCard';
import MyCarousel from '../components/EventPage/Carousel';
import Tags from '../components/EventPage/Tags';
import Speakers from '../components/EventPage/Speakers';
import Overview from '../components/EventPage/Overview';
import EventDetails from '../components/EventPage/EventDetails';
import MessageBoard from '../components/EventPage/MessageBoard';
import OrganizersMessage from '../components/EventPage/OrganizersMessage';
import SimilarEventSection from '../components/EventPage/SimilarEventSection';
import Timeline from '../components/EventPage/Timeline';
// import MapSection from '../components/event_components/Maps';
import { AddToCalenderBtn, BookmarkBtn } from '../components/EventPage/Buttons';

const EventPage = (props) => {
	const [event, setEvent] = useState(null);

	const { eventID } = props.match.params;
	const getEvent = async (eventID) => {
		const res = await axios.get(`/events/${eventID}/`);
		setEvent(res.data);
	};

	useEffect(() => {
		if (props.location.state.event) setEvent(props.location.state.event);
		else getEvent(eventID);
	}, [eventID]);

	return (
		<div className='eventPage'>
			<div className='inner'>
				<section className='hero'>
					<div className='left'>
						<MyCarousel imgURL={event?.image} />
					</div>
					<aside className='right collapsable-card'>
						<TicketCard event={event} />
						<AddToCalenderBtn />
						<BookmarkBtn />
					</aside>
				</section>
				<section className='tags'>
					<Tags tags={event?.tags} />
				</section>
				<section className='overview'>
					<Overview description={event?.description} />
				</section>
				<Speakers />
				<section className='eventdetails'>
					<EventDetails event={event} />
				</section>
				<section className='timeline'>
					<Timeline />
				</section>
				<section className='messageboard'>
					<MessageBoard />
				</section>
				<section className='organizersmessage'>
					<OrganizersMessage />
				</section>
			</div>
			<section className='similarevents'>
				<SimilarEventSection />
			</section>
		</div>
	);
};

export default EventPage;
