import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Loading from '../Common/Loading';

const EventHistory = (props) => {
	return (
		<section className='eventHistory'>
			{!(props.attendedEvents && props.upcomingEvents) ? (
				<Loading />
			) : (
				<div>Event History</div>
			)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	attendedEvents: state.profileState.attendedEvents,
	upcomingEvents: state.profileState.upcomingEvents
});

export default connect(mapStateToProps, {})(EventHistory);
