import { useEffect, useRef } from 'react';
import { Link, NavLink, withRouter, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { getSelfProfile } from '../../redux/actions/profileActions';

import search from '../../icons/search.svg';
import downArrow from '../../icons/downArrow.svg';
import { locations } from '../../API/constants';

const Navbar = (props) => {
	const hamburger = useRef(null);
	const sidebar = useRef(null);

	let { pathname } = useLocation();

	const toggleSidebar = () => {
		sidebar?.current.classList.toggle('navbar__mobile__sidebar--open');
		sidebar?.current.classList.toggle('navbar__mobile__sidebar--closed');
		hamburger?.current.classList.toggle('open');
	};

	useEffect(() => {
		if (props.isAuthenticated) {
			props.getSelfProfile();
		}
	}, [props.isAuthenticated]);

	const NavbarLogo = () => (
		<Link to='/' className='navbar__logo'>
			H!tch
		</Link>
	);

	const NavbarLinks = () => (
		<div className='navbar__links'>
			<NavLink
				exact={true}
				activeClassName='active-link'
				className='nav-link'
				to='/'
				onClick={toggleSidebar}
			>
				Home
			</NavLink>
			<NavLink
				exact={true}
				activeClassName='active-link'
				className='nav-link'
				to='/about'
				onClick={toggleSidebar}
			>
				About Hitch
			</NavLink>
			<NavLink
				exact={true}
				activeClassName='active-link'
				className='nav-link'
				to='/hostintro'
				onClick={toggleSidebar}
			>
				Host
			</NavLink>
			{!props.isAuthenticated ? (
				<>
					<NavLink
						exact={true}
						activeClassName='active-link'
						className='nav-link'
						to='/login'
						onClick={toggleSidebar}
					>
						Login
					</NavLink>
					<NavLink
						exact={true}
						activeClassName='active-link'
						className='nav-link'
						to='/register'
						onClick={toggleSidebar}
					>
						Register
					</NavLink>
				</>
			) : null}
		</div>
	);

	const SearchBar = () => (
		<div className='navbar__search-wrapper'>
			<input placeholder='Search' style={{ backgroundImage: `url(${search})` }} />
		</div>
	);

	const LocationSelector = () => (
		<div className='navbar__location-wrapper'>
			<select
				className='location-dropdown'
				style={{ backgroundImage: `url(${downArrow})` }}
			>
				<option value='Online' defaultValue>
					Online
				</option>
				{locations.map((location) => (
					<option key={location} value={location}>
						{location}
					</option>
				))}
			</select>
		</div>
	);

	const ProfileDropdown = () => (
		<div className='navbar__profile-dropdown' tabIndex='-1'>
			<span>
				<i className='fas fa-user-circle profile-icon'></i>
			</span>
			<div className='profile-options'>
				<div className='profile-details'>
					<img src='/static/avatar.jpg' alt='profile picture' />
					<h3>{props.profile?.name}</h3>
				</div>
				<hr />
				<ul className='profile-links'>
					<li>
						<Link to='/profile'>View Profile</Link>
					</li>
					<li>
						<Link to='/editprofile'>Edit Profile</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/events'>My Events</Link>
					</li>
					<li>
						<Link to='/settings'>Settings</Link>
					</li>
					<li>
						<button className='logout' onClick={props.logout}>
							Log Out
						</button>
					</li>
				</ul>
			</div>
		</div>
	);

	return (
		<nav className='navbar'>
			<div className='navbar__desktop'>
				<NavbarLogo />

				<div className='navbar__desktop__middle'>
					{!pathname.startsWith('/dashboard') ? (
						<>
							<LocationSelector />
							<SearchBar />
							<NavbarLinks />
						</>
					) : (
						<div className='navbar__desktop__middle__dashboard__text'>Host Dashboard</div>
					)}
				</div>

				{props.isAuthenticated ? <ProfileDropdown /> : null}
			</div>

			<div className='navbar__mobile'>
				<span
					className='navbar__mobile__hamburger'
					ref={hamburger}
					onClick={toggleSidebar}
				>
					<i class='fas fa-bars'></i>
					<i className='fas fa-times'></i>
				</span>
				{/* <button class="menu-toggle" role="button">
					<div class="hamburger"></div>
				</button>  */}
				<div
					className='navbar__mobile__sidebar navbar__mobile__sidebar--closed'
					ref={sidebar}
				>
					<NavbarLinks />
				</div>
				<NavbarLogo />
				<div className='navbar__mobile__profile'>
					{props.isAuthenticated ? <ProfileDropdown /> : null}
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	profile: state.profileState.profile
});

export default connect(mapStateToProps, { logout, getSelfProfile })(withRouter(Navbar));

/* <NavLink
	exact={true}
	activeClassName='active-link'
	className='nav-link'
	to='/my-events'
	>
	<i className='far fa-heart fa-2x icon'></i>
</NavLink> */
