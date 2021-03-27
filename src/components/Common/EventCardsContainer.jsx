import { useState, useEffect, useRef } from 'react';

import Loading from '../Common/Loading';
import EventCard from '../Common/EventCard';

const EventCardsContainer = (props) => {
	const [events, setEvents] = useState(null);

	const io = useRef(null);
	const container = useRef(null);

	const lazyLoadBackgroundImage = (target) => {
		if (container.current) {
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
		setEvents(props.events);
	}, [props]);

	useEffect(() => {
		if (events) {
			const cards = container?.current.childNodes;
			cards?.forEach(lazyLoadBackgroundImage);
		}
	}, [events]);

	return (
		<div className='eventCardsContainer' ref={container}>
			{!events ? (
				<Loading />
			) : (
				<>
					{events.map((event) => (
						<EventCard event={event} lazyLoadBI={true} key={event.id} />
					))}
				</>
			)}
		</div>
	);
};

export default EventCardsContainer;
