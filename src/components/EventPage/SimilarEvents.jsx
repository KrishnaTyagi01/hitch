import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

import EventCard from '../Common/EventCard';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];

const SimilarEvents = (props) => {
	const { eventID } = props;
	const [similarEvents, setSimilarEvents] = useState(null);
	const getSimilarEvents = async (eventID) => {
		try {
			const res = await axios.get(`/events/${eventID}/similar-events/`);
			setSimilarEvents(res.data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(() => {
		// getSimilarEvents(eventID);
	}, [eventID]);

	return (
		<section className='similarEvents'>
			<h2 className='header'>SIMILAR EVENTS</h2>
			<Carousel pagination={false} breakPoints={breakpoints}>
				{similarEvents?.map((event, index) => <EventCard key={index} event={event} />) ??
					[]}
			</Carousel>
		</section>
	);
};

export default SimilarEvents;
