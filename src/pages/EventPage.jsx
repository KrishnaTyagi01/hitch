import { useState, useEffect } from 'react';
import axios from 'axios';

import BannerCarousel from '../components/EventPage/BannerCarousel';
import Tags from '../components/EventPage/Tags';
import HostDetails from '../components/EventPage/HostDetails';
import Overview from '../components/EventPage/Overview';
import EventDetails from '../components/EventPage/EventDetails';
import MessageBoard from '../components/EventPage/MessageBoard';
import OrganizersMessage from '../components/EventPage/OrganizersMessage';
import SimilarEvents from '../components/EventPage/SimilarEvents';
import Timeline from '../components/EventPage/Timeline';
// import MapSection from '../components/EventPage/Maps';
import EventActions from '../components/EventPage/EventActions';
import SmallEventActions from '../components/EventPage/SmallEventActions';
import Loading from '../components/Common/Loading';
import Page404 from './Page404';

import errorHandler from '../API/errorHandler';

const EventPage = (props) => {
	const { eventID } = props.match.params;
	const [event, setEvent] = useState(null);
	const [httpStatusCode, setHttpStatusCode] = useState();

	const getEvent = async () => {
		try {
			const res = await axios.get(`/events/${eventID}/`);
			setEvent(res.data);
		} catch (error) {
			setHttpStatusCode(error.response.status);
			// errorHandler(error);
		}
	};

	useEffect(() => {
		if (props.location.state?.event) setEvent(props.location.state.event);
		else getEvent();
	}, [eventID, props]);

	if (httpStatusCode === 404) {
		return <Page404 />;
	}

	return (
		<div className='eventPage'>
			{!event ? (
				<Loading />
			) : (
				<>
					<button className='back-button' onClick={props.history.goBack}>
						<i className='fa fa-chevron-left'></i>
						Back
					</button>
					<article>
						<main>

							<BannerCarousel images={[event?.image]} />
							<SmallEventActions event={event} />
							<Tags tags={event?.tags} />
							<Overview description={event?.description} />
							{/* <HostDetails /> */}
							<EventDetails event={event} />
							{/* <Timeline timeline={event?.timeline} /> */}
							{/* <MessageBoard messages={event?.messages} /> */}
							<OrganizersMessage organizersMessage={event?.organizersMessage} />
						</main>
						<aside>
							<EventActions event={event} />
						</aside>
					</article>
					<SimilarEvents eventID={eventID} />
				</>
			)}
		</div>
	);
};

export default EventPage;
