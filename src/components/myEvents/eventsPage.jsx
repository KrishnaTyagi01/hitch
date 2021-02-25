import React, { useEffect, useState } from 'react';
import Upper from './Upper';
import Filter from './Filter';
import MyEventCard from './MyEventCard';
import axios from 'axios';
import SimilarEventSection from '../EventPage/SimilarEventSection';
import { Redirect, Link } from 'react-router-dom';

const MainComponent = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/events/`);
			res = res.data;
			setEvents(res);
		};
		getAllEvents();
	}, []);

	// console.log(events);

	const MyEvents = events.map((event) => {
		return (
			<Link
				to={{
					pathname: '/event-details',
					state: { event: event }
				}}
			>
				<MyEventCard
					title={event.title}
					desc={event.description}
					img={event.image}
					date={event.scheduled_date}
				/>
			</Link>
		);
	});

	const onButtonClick = (events) => {
		setEvents(events);
	};

	const onFilterChange = (events) => {
		setEvents(events);
	};

	return (
		<div className='eventsPage'>
			<Upper onButtonClick={onButtonClick} />
			<div className='eventsPage__content'>
				<div className='eventsPage__content--filter'>
					<Filter onFilterChange={onFilterChange} />
				</div>
				<section className='eventsPage__content--events'>{MyEvents}</section>
			</div>
			<div className='eventsPage_carousel'>
				<SimilarEventSection />
			</div>
			<div className='eventsPage_footer'></div>
		</div>
	);
};

export default MainComponent;
