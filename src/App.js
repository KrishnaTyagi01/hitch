import './App.css'
import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link,
	useLocation,
	withRouter
} from 'react-router-dom';

// import Navbar from './components/navbar/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Check from './pages/Check';
import Otp from './pages/Otp';
import EventDetailsPage from './pages/EventDetailsPage';
import Profile from './pages/Profile'
import HostIntro from './pages/HostIntro'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './API/ProtectedRoute'
import Filter from './components/myEvents/Filter'
import Upper from './components/myEvents/Upper';
import eventsPage from './components/myEvents/eventsPage';
import AboutUs from './components/AboutUs/AboutUs';
import HostEvent from './components/HostEvent/HostEvent';

function _ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<ScrollToTop >
					<Route exact path="/" component={EventDetailsPage} />
					<Route exact path="/check"><Check /></Route>
					{/* <Route exact path="/landing"><Landing /></Route> */}
					<Route exact path="/signup"> <Signup /></Route>
					<Route exact path="/signin" render={props => <Signin {...props} />} />
					<Route exact path="/register"> <Register /></Route>
					<Route exact path="/otp" render={props => <Otp {...props} />} />
					<PrivateRoute exact path="/profile" component={Profile} />
					<Route exact path="/hostintro"> <HostIntro /></Route>
					<Route exact path="/events" component={eventsPage}></Route>
					<Route exact path="/about-us" component={AboutUs}></Route>
					<Route exact path="/host-event" component={HostEvent}></Route>
				</ScrollToTop>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
