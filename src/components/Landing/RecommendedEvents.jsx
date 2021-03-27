import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

import EventCard from '../Common/EventCard';
import { connect } from 'react-redux';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];

const RecommendedEvents = (props) => {
	const { eventID } = props;
	const [recommendedEvents, setRecommendedEvents] = useState([]);

	useEffect(() => {
		if (props.isAuthenticated) {
			const getRecommendedEvents = async (eventID) => {
				try {
					let form_data = new FormData();
					form_data.append('topics', ''); //ADD TOPICS USER LIKES HEREEEEEEEEEEEEEEEEEEEEEEEEEEE
					form_data.append('categories', ''); //ADD CATEGORIES USER LIKES HERRRRRRRRRRRRRRRRRRRRREEEEE

					// const res = await axios.get(`/events/recommended-events/`);

					let url = 'http://167.71.237.202/events/recommended-events/';
					const res = await axios({
						url: url,
						method: 'GET',
						headers: {
							Authorization: `Token ${props.token}`,
							'Content-Type': 'multipart/form-data'
						},
						data: form_data
					});

					setRecommendedEvents(res.data);
				} catch (error) {
					console.error();
				}
			};
			getRecommendedEvents(eventID);
		}
	}, []);

	if (!props.isAuthenticated) return null;

	return (
		<section className='similarEvents'>
			<h2 className='header'>Recommended Events</h2>
			<Carousel pagination={false} breakPoints={breakpoints}>
				{recommendedEvents?.map((event, index) => (
					<EventCard key={index} event={event} />
				)) ?? []}
			</Carousel>
		</section>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	token: state.authState.token
});

export default connect(mapStateToProps)(RecommendedEvents);
