import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PrivateRoute from './components/Common/PrivateRoute';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Otp from './pages/Otp';
import EventPage from './pages/EventPage';
import Profile from './pages/Profile';
import HostIntro from './pages/HostIntro';
import Page404 from './pages/Page404';

import eventsPage from './components/myEvents/eventsPage';
import AboutUs from './components/AboutUs/AboutUs';
import HostEvent from './components/HostEvent/HostEvent';
import Temp from './components/Dashboard/Temp';
import Otp_Page from './pages/otp_page';
import RegisterEvent from './pages/RegisterEvent';

// import Filter from './components/myEvents/Filter'
// import Upper from './components/myEvents/Upper';

import store from './redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
	// function _ScrollToTop(props) {
	// 	const { pathname } = useLocation();
	// 	useEffect(() => {
	// 		window.scrollTo(0, 0);
	// 	}, [pathname]);
	// 	return props.children;
	// }

	// const ScrollToTop = withRouter(_ScrollToTop);
	// <ScrollToTop >
	// </ScrollToTop>

	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Navbar />

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/otp' render={(props) => <Otp {...props} />} />
						<Route exact path='/otp_page' render={(props) => <Otp_Page {...props} />} />

						<Route exact path='/about' component={AboutUs} />
						<Route exact path='/hostintro' component={HostIntro} />
						<Route
							exact
							path='/event/:eventID'
							render={(props) => <EventPage {...props} />}
						/>
						<Route exact path='/my-events' component={eventsPage} />

						<PrivateRoute exact path='/profile' component={Profile} />
						<PrivateRoute exact path='/dashboard' component={Temp} />
						<PrivateRoute exact path='/host-event' component={HostEvent} />
						<PrivateRoute exact path='/register-event' component={RegisterEvent} />

						<Route component={Page404} />
					</Switch>

					<Footer />
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
