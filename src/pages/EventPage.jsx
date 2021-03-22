import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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
import { getEvent, getProfile } from '../API/commonRequests';

const EventPage = (props) => {
	const { eventID } = props.match.params;
	const [event, setEvent] = useState(null);
	const [eventError, setEventError] = useState(null);
	const [profile, setProfile] = useState(null);
	const [profileError, setProfileError] = useState(null);

	const loadEvent = async () => {
		if (props.location.state?.event) {
			setEvent(props.location.state.event);
		} else {
			const res = await getEvent(eventID);
			if (res.status === 200) {
				setEvent(res.data);
			} else if (res.status === 404) {
				setEventError(404);
			} else {
				console.log(res);
			}
			// const { data, error } = await getEvent(eventID);
			// if (data) setEvent(data);
			// else setEventError(error);
		}
	};

	const loadProfile = async () => {
		if (event?.author) {
			const y = await getProfile(event.author);
			// console.log(y);
			// const { data, error } = await getProfile(event.author);
			// if (data) setProfile(data);
			// else setProfileError(error);
		}
	};

	useEffect(() => {
		loadEvent();
	}, [eventID, props]);

	useEffect(() => {
		loadProfile();
	}, [event]);

	if (eventError === 404) {
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

const mapStateToProps = (state) => ({
	token: state.authState.token
});



export default connect(mapStateToProps)(EventPage);
