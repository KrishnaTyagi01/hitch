import { connect } from 'react-redux';

import Hero from '../components/profile_components/Hero';
import About from '../components/profile_components/About';
import HeaderSection from '../components/profile_components/HeaderSection';
import ProfileCard from '../components/profile_components/ProfileCard';
import AttendedEvents from '../components/profile_components/AttendedEvents';
import HostedEvents from '../components/profile_components/HostedEvents';
import UpcomingEvents from '../components/profile_components/UpcomingEvents';
import WishlistEvents from '../components/profile_components/WishlistEvents';

const SelfProfile = (props) => {
	return (
		<main className='profilePage'>
			<div className='profilePage__top'>
				<Hero />
				<HeaderSection />
			</div>
			<div className='profilePage__bottom'>
				<div className='profilePage__bottom__left'>
					<ProfileCard profile={props.profile} />
				</div>
				<div className='profilePage__bottom__right'>
					<About name={props.profile?.name} about={props.profile?.about} />
					<HostedEvents hostedEvents={props.hostedEvents} />
					<AttendedEvents attendedEvents={props.attendedEvents} />
					<UpcomingEvents upcomingEvents={props.upcomingEvents} />
					<WishlistEvents wishlistEvents={props.wishlistEvents} />
				</div>
			</div>
		</main>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profileState.profile,
	hostedEvents: state.profileState.hostedEvents,
	attendedEvents: state.profileState.attendedEvents,
	upcomingEvents: state.profileState.upcomingEvents,
	wishlistEvents: state.profileState.wishlistEvents
});

export default connect(mapStateToProps, {})(SelfProfile);
