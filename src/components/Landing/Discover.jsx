import { useState, useEffect } from "react";
import filters from "./filters.json";
import EventCardNew from "../Common/EventCard";
import axios from "axios";
import { dummyEvents } from "./events";
import Filter from "../myEvents/Filter";
import { Link } from 'react-router-dom';
import MyEventCard from '../myEvents/MyEventCard';

export default function Discover() {


	const [events, setEvents] = useState([]);

	useEffect(() => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/events/`);
			res = res.data;
			setEvents(res);
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

	const updateFilter = (e) => {
		console.log(e.target.name, e.target.value);
	};

	const onFilterChange = (events) => {
		setEvents(events);
	}

	return (
		<div className="landing-discover">
			<div className="header">
				<h2>Discover</h2>
				<div className="event-filters">
					{filters.map((filter) => (
						<div key={filter.name} className="event-filter">
							<select name={filter.name} onChange={updateFilter}>
								<option value="" defaultValue hidden>
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

			<div className="body">
				<div className="filters">
					<Filter onFilterChange={onFilterChange} />
				</div>
				<div className="discover-events">
					{MyEvents}
				</div>
			</div>
		</div>
	);
}

{
	/* <i class="fas fa-chevron-down"></i>  */
}
