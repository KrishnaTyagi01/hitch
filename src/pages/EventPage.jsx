import { useState, useEffect } from 'react';
import axios from 'axios';

import BannerCarousel from '../components/EventPage/BannerCarousel';
import Tags from '../components/EventPage/Tags';
import HostDetails from '../components/EventPage/HostDetails';
import Overview from '../components/EventPage/Overview';
import EventDetails from '../components/EventPage/EventDetails';
// import MessageBoard from '../components/EventPage/MessageBoard';
import OrganizersMessage from '../components/EventPage/OrganizersMessage';
import SimilarEvents from '../components/EventPage/SimilarEvents';
// import Timeline from '../components/EventPage/Timeline';
// import MapSection from '../components/EventPage/Maps';
import EventActions from '../components/EventPage/EventActions';
import SmallEventActions from '../components/EventPage/SmallEventActions';

import Loading from '../components/Common/Loading';
import Page404 from './Page404';

const EventPage = (props) => {
	const { eventID } = props.match.params;
	const [event, setEvent] = useState(null);
	const [eventError, setEventError] = useState(null);
	const [profile, setProfile] = useState(null);
	const [profileError, setProfileError] = useState(null);

	useEffect(() => {
		if (props.location.state?.event) {
			setEvent(props.location.state.event);
		} else {
			const getEvent = async () => {
				try {
					const res = await axios.get(`/events/${eventID}/`);
					setEvent(res.data);
				} catch (error) {
					// errorHandler(error);
					setEventError(404);
				}
			};

			getEvent();
		}
	}, [eventID, props.location]);

	useEffect(() => {
		if (event) {
			const getProfile = async (profileID) => {
				try {
					const res = await axios.get(`/profiles/${profileID}/`);
					setProfile(res.data);
				} catch (error) {
					// errorHandler(error);
					setProfileError(true);
				}
			};
			getProfile(event.author);
		}
	}, [event]);

	if (eventError === 404) {
		return <Page404 />;
	}

	const images = () => {
		var arr = [];
		if (event && event.image) arr.push(event.image);
		if (event && event.image1) arr.push(event.image1);
		if (event && event.image2) arr.push(event.image2);
		return arr;
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
							<BannerCarousel images={images()} />
							<SmallEventActions event={event} />
							<Tags tags={event?.tags} />
							<Overview description={event?.description} />
							<HostDetails profile={profile} profileError={profileError} />
							<EventDetails event={event} organizersWebsite={profile?.website} />
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
