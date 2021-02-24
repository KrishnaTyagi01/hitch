import { useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';
import { getSelfProfile } from '../../redux/actions/profileActions';

const locations = ['Delhi', 'Mumbai', 'Kolkata', 'Chandigarh'];

const Navbar = (props) => {
	useEffect(() => {
		if (props.isAuthenticated) {
			props.getSelfProfile();
		}
	}, []);

	return (
		<nav className='navbar'>
			<Link to='/' className='logo'>
				H!tch
			</Link>
			<div className='select-wrapper'>
				<select className='location-dropdown'>
					<option value='Online' defaultValue>
						Online
					</option>
					{locations.map((location) => (
						<option key={location} value={location}>
							{location}
						</option>
					))}
				</select>
				<i className='fa fa-chevron-down select-icon'></i>
			</div>
			<div className='search-wrapper'>
				<i className='fa fa-search search-icon'></i>
				<input placeholder='Search' />
			</div>
			<NavLink exact={true} activeClassName='active-link' className='nav-link' to='/'>
				Home
			</NavLink>
			<NavLink
				exact={true}
				activeClassName='active-link'
				className='nav-link'
				to='/about'
			>
				About Hitch
			</NavLink>

			{props.isAuthenticated ? (
				<>
					<NavLink
						exact={true}
						activeClassName='active-link'
						className='nav-link'
						to='/bookmarks'
					>
						<i className='far fa-heart fa-2x icon'></i>
					</NavLink>
					<div className='profile-dropdown' tabIndex='-1'>
						<span>
							<i className='fas fa-user-circle profile-icon'></i>
						</span>
						<div className='profile-options'>
							<div className='profile-details'>
								<img src='/static/avatar.jpg' alt='profile picture' />
								<h3>John Doe</h3>
							</div>
							<hr />
							<ul className='profile-links'>
								<li>
									<Link to='/profile'>View Profile</Link>
								</li>
								<li>
									<Link to='/dashboard'>Dashboard</Link>
								</li>
								<li>
									<Link to='/eventhistory'>My Events</Link>
								</li>
								<li>
									<Link to='/profile/edit'>Edit Profile</Link>
								</li>
								<li>
									<Link to='/settings'>Settings</Link>
								</li>
								<li className='logout' onClick={props.logout}>
									Log Out
								</li>
							</ul>
						</div>
					</div>
				</>
			) : (
				<>
					<NavLink
						exact={true}
						activeClassName='active-link'
						className='nav-link'
						to='/loginold'
					>
						Login
					</NavLink>
					<NavLink
						exact={true}
						activeClassName='active-link'
						className='nav-link'
						to='/registerold'
					>
						Register
					</NavLink>
				</>
			)}

			<NavLink exact={true} activeClassName='active-link' className='btn' to='/host'>
				Host
			</NavLink>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { logout, getSelfProfile })(withRouter(Navbar));
