import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from '../MyEvents/Filter';
import EventCardsContainer from '../Common/EventCardsContainer';
// import { dummyEvents } from '../../temp/events';

export default function Discover() {
	const [events, setEvents] = useState(null);

	const getEvents = async () => {
		try {
			const res = await axios.get('/events/');
			setEvents(res.data);
		} catch (error) {
			console.error(error);
			// setHttpStatusCode(error.response.status);
			// errorHandler(error);
		}
	};

	const onFilterChange = (events) => {
		setEvents(events);
	};

	useEffect(() => {
		getEvents();
		// setEvents(dummyEvents);
	}, []);

	return (
		<section className='discover'>
			<h2>Discover</h2>

			<div className='discover__content'>
				<aside>
					<Filter onFilterChange={onFilterChange} />
				</aside>
				<EventCardsContainer events={events} />
			</div>
		</section>
	);
}
