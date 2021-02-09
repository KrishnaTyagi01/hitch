import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';

function Upper(props) {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		console.log(events);
		props.onButtonClick(events);
	}, [events])

	const Bookmark = () => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/events/`);
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Hosted = () => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/hosted_events/`, {
				headers: {
					Authorization: 'Token cb9022f78d5d99ddaea2b55eddfa846ec5c1e821dd9814d5019834053a28b3ec'
				}
			});
			// http://{{hitch}}/profiles/hosted_events/
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Upcoming = () => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/upcoming_events/`, {
				headers: {
					Authorization: 'Token cb9022f78d5d99ddaea2b55eddfa846ec5c1e821dd9814d5019834053a28b3ec'
				}
			});
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Attended = () => {
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/events_attended/`, {
				headers: {
					Authorization: 'Token cb9022f78d5d99ddaea2b55eddfa846ec5c1e821dd9814d5019834053a28b3ec'
				}
			});
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}


	return (
		<div className="upper">
			<div className="upper__container">
				<h3 className="upper__container--head">My Events</h3>
				<div className="upper__container--category">
					<button onClick={Bookmark} className="upper__container--btnactive" id="upper__container--btnactive">
						Bookmark
					</button>
					<button onClick={Hosted} className="upper__container--btn">
						Your Hosted Events
					</button>
					<button onClick={Upcoming} className="upper__container--btn">
						Upcoming Events
					</button>
					<button onClick={Attended} className="upper__container--btn" >
						Events Attended
					</button>
				</div>
			</div>
		</div>
	)
}

export default Upper
