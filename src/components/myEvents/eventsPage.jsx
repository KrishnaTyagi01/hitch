import React, { useEffect, useState } from 'react';
import Upper from './Upper';
import Filter from './Filter';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import MyEventCard from './MyEventCard';
import axios from 'axios';
// import SimilarEventSection from '../event_components/SimilarEventSection';
import { Redirect, Link } from 'react-router-dom';

const MainComponent = () => {
	const [events, setEvents] = useState([]);

	const refactorEvents = (currEvents) => {
		let tempEvents = [...currEvents];
		if (tempEvents.length > 0 && tempEvents[0].image[0] === '/') {
			for (let i = 0; i < tempEvents.length; ++i) {
				tempEvents[i].image = "http://167.71.237.202" + tempEvents[i].image;
				tempEvents[i].url = "http://167.71.237.202" + tempEvents[i].url;
			}
		}
		return tempEvents;
	}

	useEffect(() => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/events/`);
			res = res.data;
			setEvents(refactorEvents(res));
		}
		getAllEvents();

	}, []);

	const MyEvents = events.map(event => {
		return (
			<Link to={{
				pathname: "/event-details",
				state: { event: event }
			}}
			>
				<MyEventCard title={event.title} desc={event.description} img={event.image} date={event.scheduled_date} />
			</Link>
		)
	})

	const onButtonClick = (events) => {
		setEvents(refactorEvents(events));
		// refactorEvents();
	}

	return (
		<div className="eventsPage">
			{/* <Navbar /> */}
			<Upper onButtonClick={onButtonClick} />
			<div className="eventsPage__content">
				{/* <div className="eventsPage__content--filter">
                    <Filter onFilterChange={onFilterChange} />
                </div> */}
				<section className="eventsPage__content--events">
					<div className="eventsGrid">
						{MyEvents}
					</div>
				</section>
			</div>
		</div>
	);
}

export default MainComponent;