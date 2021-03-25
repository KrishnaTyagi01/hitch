import React, { useEffect, useState, useRef } from 'react';
import Upper from './Upper';
import axios from 'axios';
import { connect } from 'react-redux';
import EventCard from '../Common/EventCard';

const MainComponent = (props) => {
	const [events, setEvents] = useState([]);

	const io = useRef(null);
	const cardContainer = useRef(null);

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
		const getAllEvents = async () => {
			let res = await axios.get(`http://167.71.237.202/profiles/wishlist/`, {
				headers: {
					Authorization: `Token ${props.token}`,
				}
			});
			res = res.data;
			setEvents(refactorEvents(res));
		}
		getAllEvents();

	}, []);

	useEffect(() => {
		if (events) {
			const cards = cardContainer?.current.childNodes;
			cards?.forEach(lazyLoadBackgroundImage);
		}
	}, [events]);

	const AAA = events.map((event) => (
		<EventCard event={event} lazyLoadBI={true} key={event.id} />
	));

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
					<div className="eventsGrid" ref={cardContainer}>
						{AAA}
					</div>
				</section>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		token: state.authState.token,
	}
}


export default connect(mapStateToProps)(MainComponent);
