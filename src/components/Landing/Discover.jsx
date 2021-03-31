import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Filter from '../myEvents/Filter';
import EventCardsContainer from '../Common/EventCardsContainer';
import filters from './filters.json';
import { dummyEvents } from '../../temp/events';

export default function Discover() {
	const [events, setEvents] = useState([]);

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

	const updateFilter = (e) => {
		console.log(e.target.name, e.target.value);
	};

	const onFilterChange = (events) => {
		setEvents(events);
	};

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<section className='landing-discover'>
			<h2>Discover</h2>

			<div className='body'>
				<aside className="filters">
					<Filter onFilterChange={onFilterChange} />
				</aside>
				<EventCardsContainer events={events} />
			</div>
		</section>
	);
}
