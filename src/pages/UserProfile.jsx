import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import About from '../components/Profile/About';
import HeaderSection from '../components/Profile/HeaderSection';
import Hero from '../components/Profile/Hero';
import ProfileCard from '../components/Profile/ProfileCard';
import HostedEvents from '../components/Profile/HostedEvents';
// import { ConnectionButton, FollowButton } from '../components/profile_components/Buttons';
import Loading from '../components/Common/Loading';
import Page404 from './Page404';

import errorHandler from '../API/errorHandler';

const Profile = (props) => {
	const { profileID } = props.match.params;

	const [userProfile, setUserProfile] = useState(null);
	const [hostedEvents, setHostedEvents] = useState(null);
	const [profileError, setProfileError] = useState(null);

	useEffect(() => {
		if (props.location.state?.profile) {
			setUserProfile(props.location.state.profile);
		} else {
			const getUserProfile = async () => {
				try {
					const res = await axios.get(`/profiles/${profileID}/`);
					setUserProfile(res.data);
				} catch (error) {
					errorHandler(error);
					setProfileError(404);
				}
			};
			getUserProfile();
		}
	}, [profileID, props]);

	// const getHostedEvents = () => {
	// 	console.log(userProfile.hosted_events);
	// 	// const eventResponse = await axios.all(
	// 	// 	userProfile.hosted_events.map((id) => axios.get(`/events/${id}`))
	// 	// );
	// };

	useEffect(() => {
		if (userProfile) {
			const eventsArray = JSON.parse(userProfile.hosted_events);
			if (eventsArray.length === 0) {
				setHostedEvents([]);
			} else {
				const getHostedEvent = async (eventID) => {
					try {
						const res = await axios.get(`/events/${eventID}/`);
						return Promise.resolve(res.data);
					} catch (error) {
						return Promise.reject(error);
					}
				};
				const requests = eventsArray.map((id) => getHostedEvent(id));
				const getHostedEvents = async () => {
					const response = await Promise.allSettled(requests);
					const results = response.map((item) => item.value);
					setHostedEvents(results);
				};
				getHostedEvents();
			}
		}
	}, [userProfile]);

	if (profileError === 404) {
		return <Page404 />;
	}

	return (
		<section className='profilePage'>
			{!userProfile ? (
				<Loading />
			) : (
				<>
					<Helmet>
						<title>{`${userProfile.name}'s Profile`} | Mezami</title>
					</Helmet>
					<div className='profilePage__top'>
						<Hero />
						<HeaderSection />
					</div>
					<div className='profilePage__bottom'>
						<div className='profilePage__bottom__left'>
							<ProfileCard profile={userProfile} />
							{/* <div className='profile__left--connectionbtn'>
							<ConnectionButton />
						</div>
						<div className='profile__left--followbtn'>
							<FollowButton />
						</div> */}
						</div>

						<div className='profilePage__bottom__right'>
							<About name={userProfile?.name} about={userProfile?.about} />
							<HostedEvents hostedEvents={hostedEvents} />
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Profile;
