import { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRoute from './components/Common/PrivateRoute';
import LoginPrompt from './components/Common/LoginPrompt';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Otp from './pages/Otp';
import Otp_Page from './pages/otp_page';

import EventPage from './pages/EventPage';
import UserProfile from './pages/UserProfile';

import SelfProfile from './pages/SelfProfile';
import EditProfile from './pages/EditProfile';
import EventRegistration from './pages/EventRegistration';

import HostIntro from './pages/HostIntro';
import AboutUs from './components/AboutUs/AboutUs';
import eventsPage from './components/myEvents/eventsPage';
import HostEvent from './components/HostEvent/HostEvent';

import Temp from './components/Dashboard/Temp';
import EventTicket from './pages/EventTicket';
import Page404 from './pages/Page404';

import store from './redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import EventDetails from './components/EventPage/EventDetails';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
	function ScrollToTop(props) {

		const { pathname } = useLocation();
		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
		return null;
	}

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<ScrollToTop />
					<Navbar />
					<LoginPrompt />

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/otp' render={(props) => <Otp {...props} />} />
						<Route exact path='/otp_page' render={(props) => <Otp_Page {...props} />} />

						<Route exact path='/about' component={AboutUs} />
						<Route exact path='/hostintro' component={HostIntro} />
						<Route exact path="/search" render={(props) => <SearchPage {...props} />} />

						<Route exact path="/events" component={eventsPage}></Route>
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

						<PrivateRoute exact path='/profile' component={SelfProfile} />
						<PrivateRoute exact path='/editprofile' component={EditProfile} />
						<PrivateRoute exact path='/dashboard' component={Temp} />
						<PrivateRoute exact path='/host-event' component={HostEvent} />
						<PrivateRoute
							exact
							path='/event/:eventID/register'
							component={EventRegistration}
						/>
						<PrivateRoute exact path='/event/:eventID/ticket' component={EventTicket} />
						<Route component={Page404} />
					</Switch>

					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
