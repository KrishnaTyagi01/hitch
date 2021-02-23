import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions/authActions';

const locations = ['Delhi', 'Mumbai', 'Kolkata', 'Chandigarh'];

const Navbar = (props) => {
	return (
		<nav className='navbar'>
			<div className='logo'>
				<Link to='/'>H!tch</Link>
			</div>
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
			</div>
			<div className='search-wrapper'>
				<input placeholder='Search' />
			</div>
			<div>
				<NavLink exact={true} activeClassName='activeLink' className='nav-link' to='/'>
					Home
				</NavLink>
			</div>
			<div>
				<NavLink
					exact={true}
					activeClassName='activeLink'
					className='nav-link'
					to='/about-us'
				>
					About Hitch
				</NavLink>
			</div>

			{props.username ? (
				<>
					<div>
						<NavLink
							exact={true}
							activeClassName='activeLink'
							className='nav-link'
							to='/events'
						>
							<i className='far fa-heart fa-2x icon'></i>
						</NavLink>
					</div>
					<div className='profileDropdown' tabIndex='-1'>
						<span>
							<i className='fas fa-user-circle icon'></i>
						</span>
						<div className='profileOptions'>
							<div className='profileDetails'>
								<img src='/static/avatar.jpg' alt='profile picture' />
								<h3>John Doe</h3>
							</div>
							<hr />
							<ul class='profileLinks'>
								<li>
									<Link to='/profile'>View Profile</Link>
								</li>
								<li>
									<Link to='/dashboard'>Dashboard</Link>
								</li>
								<li>
									<Link to='/events'>My Events</Link>
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
					<div>
						<NavLink
							exact={true}
							activeClassName='activeLink'
							className='nav-link'
							to='/login'
						>
							Login
						</NavLink>
					</div>
					<div>
						<NavLink
							exact={true}
							activeClassName='activeLink'
							className='nav-link'
							to='/register'
						>
							Register
						</NavLink>
					</div>
				</>
			)}

			<div>
				<NavLink
					exact={true}
					activeClassName='activeLink'
					className='btn'
					to='/host-event'
				>
					Host
				</NavLink>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	username: state.authState.username
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
