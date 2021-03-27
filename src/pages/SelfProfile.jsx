import { connect } from 'react-redux';

import Hero from '../components/Profile/Hero';
import About from '../components/Profile/About';
import HeaderSection from '../components/Profile/HeaderSection';
import ProfileCard from '../components/Profile/ProfileCard';
import AttendedEvents from '../components/Profile/AttendedEvents';
import HostedEvents from '../components/Profile/HostedEvents';
import UpcomingEvents from '../components/Profile/UpcomingEvents';
import WishlistEvents from '../components/Profile/WishlistEvents';

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
