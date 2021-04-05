import { Switch, Route, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import EditProfile from '../components/Settings/EditProfile';
import EventHistory from '../components/Settings/EventHistory';

const SettingsSidebar = () => {
	return (
		<aside className='settingsSidebar'>
			<nav>
				<ul className='settings-menu'>
					<li>
						<NavLink
							exact={true}
							activeClassName='active-link'
							className='nav-link'
							to='/settings/edit-profile'
						>
							Edit Profile
						</NavLink>
						<ul className='edit-profile-links'>
							<li>
								<NavHashLink
									to='/settings/edit-profile#personal-details'
									activeStyle={{ color: 'var(--color-secondary-3)' }}
								>
									Personal Details
								</NavHashLink>
							</li>
							<li>
								<NavHashLink
									to='/settings/edit-profile#preferences'
									activeStyle={{ color: 'var(--color-secondary-3)' }}
								>
									Preferences
								</NavHashLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink
							exact={true}
							activeClassName='active-link'
							className='nav-link'
							to='/settings/event-history'
						>
							Event History
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

const Settings = () => {
	return (
		<main className='settings'>
			<div className='settings__top'></div>
			<div className='settings__bottom'>
				<div className='settings__left'>
					<SettingsSidebar />
				</div>
				<div className='settings__right'>
					<Switch>
						<Route exact path='/settings'>
							<h3>Manage your profile here</h3>
						</Route>
						<Route path='/settings/edit-profile' component={EditProfile} />
						<Route path='/settings/event-history' component={EventHistory} />
					</Switch>
				</div>
			</div>
		</main>
	);
};

export default Settings;
