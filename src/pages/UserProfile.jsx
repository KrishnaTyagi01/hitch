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
	const [hostedEvents, setHostedEvents] = useState([]);

	const setUserData = async (profileID) => {
		try {
			const profileResponse = await axios.get(`/profiles/${profileID}/`);
			setUserProfile(profileResponse.data);
			console.log(profileResponse.data);
			const eventResponse = await axios.all(
				profileResponse.data.hosted_events.map((id) => axios.get(`/events/${id}`))
			);
			console.log(eventResponse);
		} catch (error) {
			errorHandler(error);
		}
	};

	useEffect(() => {
		// setUserData(profileID);
	}, [profileID]);

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
