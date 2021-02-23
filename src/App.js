// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
// import './App.css'
import React, { useEffect } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
} from 'react-router-dom';

// import Navbar from './components/navbar/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Check from './pages/Check';
import Otp from './pages/Otp';
import EventDetailsPage from './pages/EventDetailsPage';
import Profile from './pages/Profile';
import HostIntro from './pages/HostIntro';
import Page404 from './pages/Page404';
import PrivateRoute from './components/Common/ProtectedRoute';

import TempLogin from './pages/TempLogin';

import store from './redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import eventsPage from './components/myEvents/eventsPage';
import AboutUs from './components/AboutUs/AboutUs';
import HostEvent from './components/HostEvent/HostEvent';
import Temp from './components/Dashboard/Temp';
import Login from './pages/Login';
import Otp_Page from './pages/otp_page';
import RegisterEvent from './pages/RegisterEvent';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>

				{/* <Navbar /> */}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/check' component={Check} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' render={(props) => <Signin {...props} />} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/otp' render={(props) => <Otp {...props} />} />
					<PrivateRoute exact path='/profile' component={Profile} />
					<Route exact path='/hostintro' component={HostIntro} />
					<Route exact path='/templogin' component={TempLogin} />
					<Route exact path="/event-details" component={EventDetailsPage} />
					<Route exact path="/events" component={eventsPage}></Route>
					<Route exact path="/about-us" component={AboutUs}></Route>
					<Route exact path="/host-event" component={HostEvent}></Route>
					<Route exact path="/dashboard" component={Temp}></Route>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/otp_page" render={(props) => <Otp_Page {...props} />}> </Route>
					{/* // <Route path="/test/new" render={(props) => <NewTestComp {...props}/>}/> */}
					<Route exact path="/register-event" component={RegisterEvent} />
					<Route component={Page404} />
				</Switch>
				{/* <Footer /> */}

			</BrowserRouter>
		</Provider>
		// =======
		// import Profile from './pages/Profile'
		// import HostIntro from './pages/HostIntro'
		// // import { BrowserRouter, Switch, Route } from 'react-router-dom';
		// import PrivateRoute from './API/ProtectedRoute'
		// import Filter from './components/myEvents/Filter'
		// import Upper from './components/myEvents/Upper';
		// import eventsPage from './components/myEvents/eventsPage';


		// function _ScrollToTop(props) {
		// 	const { pathname } = useLocation();
		// 	useEffect(() => {
		// 		window.scrollTo(0, 0);
		// 	}, [pathname]);
		// 	return props.children;
		// }

		// const ScrollToTop = withRouter(_ScrollToTop);

		// function App() {
		// 	return (
		// 		<BrowserRouter>
		// 			<Switch>
		// 				<ScrollToTop >
		// <Route exact path="/event-details" component={EventDetailsPage} />
		// {/* <Route exact path="/event-details" render={(props) => <EventDetailsPage {...props} />} /> */}
		// <Route exact path="/check"><Check /></Route>
		// {/* <Route exact path="/landing"><Landing /></Route> */}
		// <Route exact path="/signup"> <Signup /></Route>
		// <Route exact path="/"> <Signup /></Route>
		// <Route exact path="/signin" render={props => <Signin {...props} />} />
		// <Route exact path="/register"> <Register /></Route>
		// <Route exact path="/otp" render={props => <Otp {...props} />} />
		// <PrivateRoute exact path="/profile" component={Profile} />
		// <Route exact path="/hostintro"> <HostIntro /></Route>
		// <Route exact path="/events" component={eventsPage}></Route>
		// <Route exact path="/about-us" component={AboutUs}></Route>
		// <Route exact path="/host-event" component={HostEvent}></Route>
		// <Route exact path="/dashboard" component={Temp}></Route>
		// 				</ScrollToTop>
		// 			</Switch>
		// 		</BrowserRouter>

		// >>>>>>> my_branch
	);
}

export default App;
