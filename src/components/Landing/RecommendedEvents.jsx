import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import EventCard from '../Common/EventCard';
import Loading from '../Common/Loading';
import { getRecommendedEvents } from '../../redux/actions/profileActions';

const breakpoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 750, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 }
];

const RecommendedEvents = (props) => {
	// const [recommendedEvents, setRecommendedEvents] = useState(null);

	useEffect(() => {
		if (props.isAuthenticated && !props.recommendedEvents) props.getRecommendedEvents();
	}, [props.isAuthenticated]);

	if (!props.isAuthenticated) return null;

	return (
		<section className='similarEvents'>
			<h2 className='header'>Recommended Events</h2>
			{!props.recommendedEvents ? (
				<Loading />
			) : (
				<Carousel pagination={false} breakPoints={breakpoints}>
					{props.recommendedEvents?.map((event, index) => (
						<EventCard key={index} event={event} />
					)) ?? []}
				</Carousel>
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	recommendedEvents: state.profileState.recommendedEvents
});

export default connect(mapStateToProps, { getRecommendedEvents })(RecommendedEvents);
