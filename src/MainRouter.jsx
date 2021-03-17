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
import EditProfile from './pages/EditProfile';
import EventRegistration from './pages/EventRegistration';
import EventTicketPage from './pages/EventTicketPage';

import eventsPage from './components/myEvents/eventsPage';
import HostEvent from './components/HostEvent/HostEvent';

import Temp from './components/Dashboard/Temp';
import Page404 from './pages/Page404';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import PrivateRoute from './components/Common/PrivateRoute';
import LoginPrompt from './components/Common/LoginPrompt';

import SearchPage from './components/SearchPage/SearchPage';

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
				<Navbar />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />

					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/hostintro' component={HostIntro} />
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
					<Route exact path='/my-events' component={eventsPage} />
					<Route exact path="/events" component={eventsPage}></Route>
					<Route exact path="/search" render={(props) => <SearchPage {...props} />} />

					<PrivateRoute exact path='/profile' component={SelfProfile} />
					<PrivateRoute exact path='/editprofile' component={EditProfile} />
					<PrivateRoute exact path='/dashboard' component={Temp} />
					<PrivateRoute exact path='/host-event' component={HostEvent} />
					<PrivateRoute
						exact
						path='/event/:eventID/register'
						component={EventRegistration}
					/>
					<PrivateRoute exact path='/event/:eventID/ticket' component={EventTicketPage} />
					<Route component={Page404} />
				</Switch>

				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default MainRouter;
