import React, { useState, useEffect, useRef } from 'react'
// import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { connect } from 'react-redux';

const Upper = (props) => {

	// console.log(props);

	const [events, setEvents] = useState([]);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);


	useEffect(() => {
		props.onButtonClick(events);
	}, [events])

	const makeActive = (currRef) => {
		ref1.current.className = "upper__container--btn";
		ref2.current.className = "upper__container--btn";
		ref3.current.className = "upper__container--btn";
		ref4.current.className = "upper__container--btn";
		currRef.current.className = "upper__container--btnactive";
	}

	const Bookmark = () => {
		makeActive(ref1);
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/events/`);
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Hosted = () => {
		makeActive(ref2);

		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/hosted_events/`, {
				headers: {
					Authorization: `Token ${Window.auth_token}`,
				}
			});
			// http://{{hitch}}/profiles/hosted_events/
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Upcoming = () => {
		makeActive(ref3);

		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/upcoming_events/`, {
				headers: {
					Authorization: `Token ${Window.auth_token}`
				}
			});
			res = res.data;
			setEvents(res);
		}
		getAllEvents();
	}

	const Attended = () => {
		makeActive(ref4);

		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/events_attended/`, {
				headers: {
					Authorization: `Token ${Window.auth_token}`,
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
					<button ref={ref1} onClick={Bookmark} className="upper__container--btnactive">
						Bookmark
					</button>
					<button ref={ref2} onClick={Hosted} className="upper__container--btn">
						Your Hosted Events
					</button>
					<button ref={ref3} onClick={Upcoming} className="upper__container--btn">
						Upcoming Events
					</button>
					<button ref={ref4} onClick={Attended} className="upper__container--btn" >
						Events Attended
					</button>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	console.log(state);
	return { auth_token: state.auth_token };
}

export default connect(mapStateToProps)(Upper);
