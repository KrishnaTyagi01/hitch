import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Filter from '../myEvents/Filter';
import EventCard from '../Common/EventCard';
import Loading from '../Common/Loading';
import filters from './filters.json';
import { dummyEvents } from '../../temp/events';
import RecommendedEvents from './RecommendedEvents';

export default function Discover() {
	const [events, setEvents] = useState([]);

	const io = useRef(null);
	const cardContainer = useRef(null);

	const lazyLoadBackgroundImage = (target) => {
		if (cardContainer.current) {
			io.current = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('background-loaded');
						console.log('background loaded with IntersectionObserver');
						observer.disconnect();
					}
				});
			});
			io.current.observe(target);
		}
	};

	const refactorEvents = (currEvents) => {
		let tempEvents = [...currEvents];
		if (tempEvents.length > 0 && tempEvents[0].image[0] === '/') {
			for (let i = 0; i < tempEvents.length; ++i) {
				tempEvents[i].image = 'http://167.71.237.202' + tempEvents[i].image;
				tempEvents[i].url = 'http://167.71.237.202' + tempEvents[i].url;
			}
		}
		return tempEvents;
	};

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

	const getAllEvents = async () => {
		let res = await axios.get(`http://167.71.237.202/events/`);
		res = res.data;
		setEvents(refactorEvents(res));
	};

	const DiscoverEvents = events.map((event) => (
		<EventCard event={event} lazyLoadBI={true} key={event.id} />
	));

	const updateFilter = (e) => {
		console.log(e.target.name, e.target.value);
	};

	const onFilterChange = (events) => {
		setEvents(refactorEvents(events));
	};

	useEffect(() => {
		// getEvents();
		getAllEvents();
		setEvents(dummyEvents);
	}, []);

	useEffect(() => {
		if (events) {
			const cards = cardContainer?.current.childNodes;
			cards?.forEach(lazyLoadBackgroundImage);
		}
	}, [events]);

	return (
		<div className='landing-discover'>
			<div className='header'>
				<h2>Discover</h2>
				<div className='event-filters'>
					{filters.map((filter) => (
						<div key={filter.name} className='event-filter'>
							<select name={filter.name} onChange={updateFilter}>
								<option value='' defaultValue hidden>
									{filter.label}
								</option>
								{filter.options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					))}
				</div>
			</div>

			<div className='body'>
				<div className='filters'>
					<Filter onFilterChange={onFilterChange} />
				</div>
				<section className='searchPage__content--events'>
					{!events ? (
						<Loading />
					) : (
						<div className='eventsGrid' ref={cardContainer}>
							{DiscoverEvents}
						</div>
					)}
				</section>
			</div>
			{/* <RecommendedEvents /> */}
		</div>
	);
}
