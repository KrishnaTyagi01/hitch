import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HostIntro from './pages/HostIntro';
import AboutUs from './components/AboutUs/AboutUs';

import EventPage from './pages/EventPage';
import UserProfile from './pages/UserProfile';

import SelfProfile from './pages/SelfProfile';
import Settings from './pages/Settings';
import EventRegistration from './pages/EventRegistration';
import EventTicketPage from './pages/EventTicketPage';

import eventsPage from './components/myEvents/eventsPage';
import HostEvent from './components/HostEvent/HostEvent';

import Temp from './components/Dashboard/Temp';
import Page404 from './pages/Page404';

import MainHeader from './components/Layout/MainHeader';
import MainFooter from './components/Layout/MainFooter';
import PrivateRoute from './components/Common/PrivateRoute';
import LoginPrompt from './components/Common/LoginPrompt';

import SearchPage from './components/SearchPage/SearchPage';
import SurveyPage from './pages/SurveyPage';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

const MainRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<ScrollToTop />
				<LoginPrompt />
				<MainHeader />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/about' component={AboutUs} />
					<Route path='/hostintro' component={HostIntro} />

					<PrivateRoute exact path='/profile' component={SelfProfile} />
					<PrivateRoute path='/settings' component={Settings} />
					<PrivateRoute path='/dashboard' component={Temp} />
					<PrivateRoute path='/host-event' component={HostEvent} />
					<PrivateRoute path='/my-events' component={eventsPage} />
					<Route path='/survey-page' component={SurveyPage} />
					<PrivateRoute
						exact
						path='/event/:eventID/register'
						component={EventRegistration}
					/>
					<PrivateRoute exact path='/event/:eventID/ticket' component={EventTicketPage} />

					<Route
						exact
						path='/event/:eventID'
						render={(props) => <EventPage {...props} />}
					/>
					<Route
						exact
						path='/profile/:profileID'
						render={(props) => <UserProfile {...props} />}
					/>
					<Route exact path='/search' render={(props) => <SearchPage {...props} />} />

					<Route component={Page404} />
				</Switch>

				<MainFooter />
			</div>
		</BrowserRouter>
	);
};

export default MainRouter;
