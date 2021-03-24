import { useEffect, useState } from 'react';
import axios from 'axios';

import About from '../components/profile_components/About';
import HeaderSection from '../components/profile_components/HeaderSection';
import Hero from '../components/profile_components/Hero';
import ProfileCard from '../components/profile_components/ProfileCard';
import HostedEvents from '../components/profile_components/HostedEvents';
// import { ConnectionButton, FollowButton } from '../components/profile_components/Buttons';

import errorHandler from '../API/errorHandler';

const Profile = (props) => {
	const { profileID } = props.match.params;

	const [userProfile, setUserProfile] = useState(null);
	const [hostedEvents, setHostedEvents] = useState(null);

	useEffect(() => {
		if (props.location.state?.userProfile) {
			setUserProfile(props.location.state.userProfile);
		} else {
			const getUserProfile = async () => {
				try {
					const res = await axios.get(`/profiles/${profileID}/`);
					setUserProfile(res.data);
				} catch (error) {
					errorHandler(error);
				}
			};
			getUserProfile();
		}
	}, [profileID, props]);

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

	return (
		<section className='profilepage'>
			<div className='profile_top'>
				<Hero />
				<HeaderSection />
			</div>
			<div className='profile'>
				<div className='profile__left'>
					<div className='profile__left--profilecard'>
						<ProfileCard profile={userProfile} />
					</div>
					{/* <div className='profile__left--connectionbtn'>
						<ConnectionButton />
					</div>
					<div className='profile__left--followbtn'>
						<FollowButton />
					</div> */}
				</div>

				<div className='profile__right'>
					<div className='profile__right--about'>
						<About name={userProfile?.name} about={userProfile?.about} />
					</div>
					<div className='profile__right--hostedevents'>
						<HostedEvents hostedEvents={hostedEvents} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
