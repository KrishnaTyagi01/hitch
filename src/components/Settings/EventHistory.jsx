import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'moment';

import Loading from '../Common/Loading';

const EventHistory = (props) => {
	return (
		<div className='eventHistory'>
			{!(props.attendedEvents && props.upcomingEvents) ? (
				<Loading />
			) : (
				<div>
					<section className='eventHistory__upcoming'>
						<h5>Upcoming Events</h5>
						{props.upcomingEvents.length === 0 ? (
							<div className='page-text'>You have no upcoming events</div>
						) : (
							<div className='eventHistory__upcoming__events'>
								{props.upcomingEvents.map((item) => (
									<div key={item.id} className='eventHistory__item'>
										<div>
											<h5>{item.event.title}</h5>
											<div className='field'>
												<p className='field-name'>Event Date</p>
												<p className='field-value'>
													{Moment(item.event.scheduled_date).format('Do MMMM YYYY')}
												</p>
											</div>
											<div className='field'>
												<p className='field-name'>Registration Date</p>
												<p className='field-value'>
													{Moment(item.event.registration_date).format('Do MMMM YYYY')}
												</p>
											</div>
										</div>
										<Link
											to={{
												pathname: `/event/${item.event?.id}/ticket`,
												state: { ticket: item }
											}}
											className='small-button confirm'
										>
											View Ticket
										</Link>
									</div>
								))}
							</div>
						)}
					</section>
					<section className='eventHistory__attended'>
						<h5>Attended Events</h5>
						{props.attendedEvents.length === 0 ? (
							<div className='page-text'>You have no attended events</div>
						) : (
							<div className='eventHistory__attended__events'>
								{props.attendedEvents.map((item) => (
									<div key={item.id} className='eventHistory__item'>
										<div>
											<h5>{item.event.title}</h5>
											<div className='field'>
												<p className='field-name'>Event Date</p>
												<p className='field-value'>
													{Moment(item.event.scheduled_date).format('Do MMMM YYYY')}
												</p>
											</div>
											<div className='field'>
												<p className='field-name'>Registration Date</p>
												<p className='field-value'>
													{Moment(item.event.registration_date).format('Do MMMM YYYY')}
												</p>
											</div>
										</div>
										<Link
											to={{
												pathname: `/event/${item.event?.id}/ticket`,
												state: { ticket: item }
											}}
											className='small-button confirm'
										>
											View Ticket
										</Link>
									</div>
								))}
							</div>
						)}
					</section>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	attendedEvents: state.profileState.attendedEvents,
	upcomingEvents: state.profileState.upcomingEvents
});

export default connect(mapStateToProps, {})(EventHistory);
