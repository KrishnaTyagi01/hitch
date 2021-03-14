import { useState, useEffect, useRef } from 'react';
import EventCard from '../Common/EventCard';
import axios from 'axios';
import { dummyEvents } from '../../temp/events';

import Loading from '../Common/Loading';

export default function Discover() {
	const [events, setEvents] = useState(null);

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

	const getEvents = async (eventID) => {
		try {
			const res = await axios.get('/events/');
			setEvents(res.data);
		} catch (error) {
			console.error(error);
			// setHttpStatusCode(error.response.status);
			// errorHandler(error);
		}
	};

	const eventsLoaded = useRef(false);

	useEffect(() => {
		// getEvents();
		setEvents(dummyEvents);
	}, []);

	useEffect(() => {
		if (eventsLoaded.current) {
			const cards = cardContainer?.current.childNodes;
			cards?.forEach(lazyLoadBackgroundImage);
		} else {
			eventsLoaded.current = true;
		}
	}, [events]);

	return (
		<div className='landing-discover'>
			{!events ? (
				<Loading />
			) : (
				<>
					<div className='header'>
						<h2>Discover</h2>
						<div className='event-filters'></div>
					</div>

					<div className='body'>
						<div className='filters'>Filters</div>
						<div className='discover-events' ref={cardContainer}>
							{events?.map((event) => (
								<EventCard event={event} lazyLoadBI={true} key={event.id} />
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}
