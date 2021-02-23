import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

import { logout } from '../../redux/actions/authActions';

const Nav = (props) => {
	return (
		<div className='hostnav'>
			<div className='navbar__logo' style={{ paddingLeft: '20px' }}>
				<span className='navbar__logo--text'>H!tch</span>
			</div>
			<span className='hostnav__head'>Host Dashboard</span>

			{props.username ? (
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
			) : (
				<>
					<div>
						<NavLink
							exact={true}
							activeClassName='activeLink'
							className='nav-link'
							to='/templogin'
						>
							Temp Login
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

			<Link to='/host-event'>
				<span className='hostnav__right'>
					<button className='navbar__host--btn'>Host</button>
				</span>
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		username: state.authState.username
	};
};

export default connect(mapStateToProps, { logout })(withRouter(Nav));
