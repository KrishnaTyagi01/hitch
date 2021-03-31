import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { PDFDownloadLink } from '@react-pdf/renderer';

import EventTicket from '../components/EventPage/EventTicket';
// import EventTicketPDF from '../components/EventPage/EventTicket';
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

	const {
		num_of_participants,
		event: { title, scheduled_time, scheduled_date, ticket_price } = {}
	} = ticket ?? {};

	useEffect(() => {
		if (props.location.state?.ticket) {
			setTicket(props.location.state.ticket);
			setShow(true);
		} else {
			if (props.upcomingEvents) {
				const foundTicket =
					props.upcomingEvents.find((item) => item.event.id === JSON.parse(eventID)) ||
					props.attendedEvents.find((item) => item.event.id === JSON.parse(eventID));
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
					{/* <PDFDownloadLink
						document={
							<EventTicketPDF
								// ticket={ticket}
								ticket={{
									num_of_participants,
									event: { title, scheduled_time, scheduled_date, ticket_price }
								}}
								// profile={props.profile}
								profile={{ name, email, phone }}
							/>
						}
						fileName='event-ticket.pdf'
						style={{
							textDecoration: 'none',
							padding: '10px',
							color: '#4a4a4a',
							backgroundColor: '#f2f2f2',
							border: '1px solid #4a4a4a'
						}}
					>
						{({ blob, url, loading, error }) =>
							loading ? 'Loading document...' : 'Download as PDF'
						}
					</PDFDownloadLink> */}
				</>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profileState.profile,
	upcomingEvents: state.profileState.upcomingEvents,
	attendedEvents: state.profileState.attendedEvents
});

export default connect(mapStateToProps, { getUpcomingEvents })(EventTicketPage);
