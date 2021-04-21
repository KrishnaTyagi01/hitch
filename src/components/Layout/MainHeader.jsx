import { useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';

// import search from '../../icons/search.svg';
import downArrow from '../../icons/downArrow.svg';
import { eventLocations } from '../../API/constants';
// import SearchBar from './SearchBar';

const MainHeader = (props) => {
	let { pathname } = useLocation();

	const sidebar = useRef(null);

	const toggleSidebar = () => {
		sidebar?.current.classList.toggle('mainHeader__mobile__sidebar--open');
	};

	const Logo = () => (
		<Link to='/' className='mainHeader__logo'>
			Mezami
		</Link>
	);

	const NavbarLinks = () => (
		<nav className='mainHeader__links'>
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
		</nav>
	);

	// const SearchBar = () => (
	// 	<div className='mainHeader__search-wrapper'>
	// 		<input type='search' placeholder='Search' style={{ backgroundImage: `url(${search})` }} />
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

	const ProfileDropdown = () => {
		const profileMenu = useRef(null);

		const toggleProfileMenu = () => {
			profileMenu?.current.classList.toggle('profile-menu-open');
		};

		// const hideProfileMenu = () => {
		// 	profileMenu?.current.classList.remove('profile-menu-open');
		// };

		return (
			<div
				className='mainHeader__profile-dropdown'
				tabIndex='-1'
				// onBlur={hideProfileMenu}
			>
				<button
					onClick={toggleProfileMenu}
					className='mainHeader__profile-dropdown--button'
				>
					<i className='fas fa-user-circle profile-icon'></i>
				</button>

				<div className='profile-menu' ref={profileMenu}>
					<div className='profile-details'>
						<img src={props.profile?.image} alt={`${props.profile?.name}'s profile`} />
						<h3>{props.profile?.name}</h3>
					</div>
					<hr />
					<nav>
						<ul className='profile-links'>
							<li>
								<Link to='/profile'>View Profile</Link>
							</li>
							<li>
								<Link to='/settings/edit-profile'>Edit Profile</Link>
							</li>
							<li>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
							<li>
								<Link to='/my-events'>My Events</Link>
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
					</nav>
				</div>
			</div>
		);
	};

	if (pathname.startsWith('/search')) {
		return null;
	}

	return (
		<header className='mainHeader'>
			<div className='mainHeader__desktop'>
				<Logo />

				<div className='mainHeader__desktop__middle'>
					{!pathname.startsWith('/dashboard') ? (
						<>
							<LocationSelector />
							{/* <SearchBar changeSearchTerm={props.changeSearchTerm} /> */}
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
				<button className='mainHeader__mobile__toggle--hamburger' onClick={toggleSidebar}>
					<i className='fas fa-bars'></i>
				</button>
				<div className='mainHeader__mobile__sidebar' ref={sidebar}>
					<button className='mainHeader__mobile__toggle--close' onClick={toggleSidebar}>
						<i className='fas fa-times'></i>
					</button>
					<NavbarLinks />
				</div>
				<Logo />
				<div className='mainHeader__mobile__profile'>
					{props.isAuthenticated ? <ProfileDropdown /> : null}
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated,
	profile: state.profileState.profile
});

export default connect(mapStateToProps, { logout })(MainHeader);
