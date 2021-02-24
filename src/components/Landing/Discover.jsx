import { useState, useEffect, useRef } from 'react';
import filters from './filters.json';
import EventCard from '../Common/EventCard';
// import axios from 'axios';
import { dummyEvents } from './events';

export default function Discover() {
	// const [state, setState] = useState({
	// 	category: [],
	// 	eventType: [],
	// 	weekend: null
	// });
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

	useEffect(() => {
		// axios.get('http://167.71.237.202/events/').then((res) => {
		// 	setEvents(res.data);
		// });
		setEvents(dummyEvents);
	}, []);

	useEffect(() => {
		const cards = cardContainer?.current.childNodes;
		cards?.forEach(lazyLoadBackgroundImage);
	}, [events]);

	const updateFilter = (e) => {
		console.log(e.target.name, e.target.value);
	};

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
				<div className='filters'>Filters</div>
				<div className='discover-events' ref={cardContainer}>
					{events?.map((event) => (
						<EventCard event={event} lazyLoadBI={true} key={event.id} />
					))}
				</div>
			</div>
		</div>
	);
}
