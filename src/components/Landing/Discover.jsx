import { useState, useEffect } from "react";
import filters from "./filters.json";
import EventCardNew from "../Common/EventCard";
// import axios from "axios";
import { dummyEvents } from "./events";

export default function Discover() {
	// const [state, setState] = useState({
	// 	category: [],
	// 	eventType: [],
	// 	weekend: null
	// });
	const [events, setEvents] = useState(null);

	useEffect(() => {
		// axios.get("http://167.71.237.202/events/").then((res) => {
		// 	setEvents(res.data);
		// });
		setEvents(dummyEvents);
	}, []);

	const updateFilter = (e) => {
		console.log(e.target.name, e.target.value);
	};

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
				<div className="filters">Filters</div>
				<div className="discover-events">
					{events?.map((event) => (
						<EventCardNew event={event} key={event.id} />
					))}
				</div>
			</div>
		</div>
	);
}

{
	/* <i class="fas fa-chevron-down"></i>  */
}
