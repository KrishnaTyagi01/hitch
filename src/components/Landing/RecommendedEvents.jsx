import { useEffect } from 'react';
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
	const { isAuthenticated, recommendedEvents, getRecommendedEvents } = props;

	useEffect(() => {
		if (isAuthenticated && !recommendedEvents) getRecommendedEvents();
	}, [isAuthenticated, recommendedEvents, getRecommendedEvents]);

	if (!isAuthenticated) return null;

	return (
		<section className='recommendedEvents'>
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
	recommendedEvents: state.profileState.recommendedEvents
});

export default connect(mapStateToProps, { getRecommendedEvents })(RecommendedEvents);
