import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import EditProfile from '../components/Settings/EditProfile';
import EventHistory from '../components/Settings/EventHistory';

export const SettingsSidebar = () => {
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
								<HashLink
									to='/settings/edit-profile#personal-details'
									className='settings-section-link'
								>
									Personal Details
								</HashLink>
							</li>
							<li>
								<HashLink
									to='/settings/edit-profile#preferences'
									className='settings-section-link'
								>
									Preferences
								</HashLink>
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
			<section className='settings__top'></section>
			<section className='settings__bottom'>
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
			</section>
		</main>
	);
};

export default Settings;
