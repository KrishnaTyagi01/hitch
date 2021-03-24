import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PDFDownloadLink } from '@react-pdf/renderer';

import EventTicket from '../components/EventPage/EventTicket';
import Loading from '../components/Common/Loading';

import { getUpcomingEvents } from '../redux/actions/profileActions';

const NotRegistered = (props) => (
	<div className='not-registered'>
		<h4>You have not registered to this event</h4>
		<Link to={`/event/${props.eventID}/register`}>
			<button className='custom-button submit'>Register now</button>
		</Link>
	</div>
);

const EventTicketPage = (props) => {
	const { eventID } = props.match.params;
	const { name, email, phone } = props.profile ?? {};
	const [ticket, setTicket] = useState(null);
	const [notRegistered, setNotRegistered] = useState(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (props.location.state?.ticket) {
			setTicket(props.location.state.ticket);
			setShow(true);
		} else {
			if (props.upcomingEvents) {
				const foundTicket = props.upcomingEvents.find(
					(item) => item.event.id === JSON.parse(eventID)
				);
				if (foundTicket) {
					setTicket(foundTicket);
					setShow(true);
				} else {
					setNotRegistered(true);
				}
			}
		}
	}, [props, eventID]);

	if (notRegistered) {
		return <NotRegistered eventID={eventID} />;
	}

	return (
		<div className='event-ticket-page'>
			{!ticket ? (
				<Loading />
			) : (
				<>
					<EventTicket ticket={ticket} profile={props.profile} />
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profileState.profile,
	upcomingEvents: state.profileState.upcomingEvents,
	upcoming: state.profileState.upcoming
});

export default connect(mapStateToProps, { getUpcomingEvents })(EventTicketPage);
