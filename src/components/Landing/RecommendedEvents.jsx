import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

import EventCard from '../Common/EventCard';
import Loading from '../Common/Loading';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];

const RecommendedEvents = (props) => {
	const [recommendedEvents, setRecommendedEvents] = useState(null);

	useEffect(() => {
		const getRecommendedEvents = async () => {
			try {
				const res = await axios.get('/events/recommended-events/', {
					headers: {
						Authorization: `Token ${props.token}`
					}
				});
				setRecommendedEvents(res.data);
			} catch (error) {
				console.error();
			}
		};
		if (props.isAuthenticated) getRecommendedEvents();
	}, [props.isAuthenticated]);

	if (!props.isAuthenticated) return null;

	return (
		<section className='similarEvents'>
			<h2 className='header'>Recommended Events</h2>
			{!recommendedEvents ? (
				<Loading />
			) : (
				<Carousel pagination={false} breakPoints={breakpoints}>
					{recommendedEvents?.map((event, index) => (
						<EventCard key={index} event={event} />
					)) ?? []}
				</Carousel>
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	token: state.authState.token
});

export default connect(mapStateToProps)(RecommendedEvents);
