import { useEffect } from 'react';
import { connect } from 'react-redux';

import About from '../components/profile_components/About';
import AttendedEvents from '../components/profile_components/AttendedEvents';
import HeaderSection from '../components/profile_components/HeaderSection';
import Hero from '../components/profile_components/Hero';
import HostedEvents from '../components/profile_components/HostedEvents';
import Wishlist from '../components/profile_components/Wishlist';

import ProfileCard from '../components/profile_components/ProfileCard';
// import { ConnectionButton, FollowButton } from '../components/profile_components/Buttons';

import {
	getHostedEvents,
	getAttendedEvents,
	getUpcomingEvents,
	getWishlist
} from '../redux/actions/profileActions';
import { clearState } from '../redux/actions/commonActions';

const Profile = (props) => {
	useEffect(() => {
		props.getHostedEvents();
		props.getAttendedEvents();
		props.getUpcomingEvents();
		props.getWishlist();
	}, [props.isAuthenticated]);

	return (
		<section className='profilepage'>
			<div className='profile_top'>
				<Hero />
				<HeaderSection />
			</div>
			<div className='profile'>
				<div className='profile__left'>
					<div className='profile__left--profilecard'>
						<ProfileCard profile={props.profile} />
					</div>
				</div>

				<div className='profile__right'>
					<About name={props.profile?.name} about={props.profile?.about} />
					<HostedEvents hostedEvents={props.hostedEvents} />
					<AttendedEvents attendedEvents={props.attendedEvents} />
					<Wishlist event_wishlist={props.event_wishlist} />
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	profile: state.profileState.profile,
	hostedEvents: state.profileState.hostedEvents,
	attendedEvents: state.profileState.attendedEvents,
	event_wishlist: state.profileState.event_wishlist
});

export default connect(mapStateToProps, {
	getHostedEvents,
	getAttendedEvents,
	getUpcomingEvents,
	getWishlist,
	clearState
})(Profile);
