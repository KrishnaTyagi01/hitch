import { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';

// import search from '../../icons/search.svg';
import downArrow from '../../icons/downArrow.svg';
import { eventLocations } from '../../API/constants';
import SearchBar from '../Layout/SearchBar';

const SearchPageNavbar = (props) => {
	const hamburger = useRef(null);
	const sidebar = useRef(null);

	let { pathname } = useLocation();

	const toggleSidebar = () => {
		sidebar?.current.classList.toggle('mainHeader__mobile__sidebar--open');
		sidebar?.current.classList.toggle('mainHeader__mobile__sidebar--closed');
		hamburger?.current.classList.toggle('open');
	};

	const NavbarLogo = () => (
		<Link to='/' className='mainHeader__logo'>
			H!tch
		</Link>
	);

	const NavbarLinks = () => (
		<div className='mainHeader__links'>
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
				About Mezami
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

	// const SearchBar = () => (
	// 	<div className='mainHeader__search-wrapper'>
	// 		<input placeholder='Search' style={{ backgroundImage: `url(${search})` }} />
	// 	</div>
	// );

	const LocationSelector = () => (
		<div className='mainHeader__location-wrapper'>
			<select
				className='eventLocation-dropdown'
				style={{ backgroundImage: `url(${downArrow})` }}
			>
				<option value='Online' defaultValue>
					Online
				</option>
				{eventLocations.map((eventLocation) => (
					<option key={eventLocation} value={eventLocation}>
						{eventLocation}
					</option>
				))}
			</select>
		</div>
	);

	const ProfileDropdown = () => (
		<div className='mainHeader__profile-dropdown' tabIndex='-1'>
			<span>
				<i className='fas fa-user-circle profile-icon'></i>
			</span>
			<div className='profile-options'>
				<div className='profile-details'>
					<img src={props.profile?.image} alt='profile' />
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
		<nav className='mainHeader'>
			<div className='mainHeader__desktop'>
				<NavbarLogo />

				<div className='mainHeader__desktop__middle'>
					{!pathname.startsWith('/dashboard') ? (
						<>
							<LocationSelector />
							<SearchBar changeSearchTerm={props.changeSearchTerm} />
							<NavbarLinks />
						</>
					) : (
						<div className='mainHeader__desktop__middle__dashboard__text'>
							Host Dashboard
						</div>
					)}
				</div>

				{props.isAuthenticated ? <ProfileDropdown /> : null}
			</div>

			<div className='mainHeader__mobile'>
				<span
					className='mainHeader__mobile__hamburger'
					ref={hamburger}
					onClick={toggleSidebar}
				>
					<i className='fas fa-bars'></i>
					<i className='fas fa-times'></i>
				</span>
				<div
					className='mainHeader__mobile__sidebar mainHeader__mobile__sidebar--closed'
					ref={sidebar}
				>
					<NavbarLinks />
				</div>
				<NavbarLogo />
				<div className='mainHeader__mobile__profile'>
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

export default connect(mapStateToProps, { logout })(SearchPageNavbar);
