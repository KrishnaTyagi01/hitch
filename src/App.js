import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Check from './pages/Check';
import Otp from './pages/Otp';
import EventDetailsPage from './pages/EventDetailsPage';
import Profile from './pages/Profile';
import HostIntro from './pages/HostIntro';
import Page404 from './pages/Page404';
import PrivateRoute from './API/ProtectedRoute';

import store from './redux/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />

				<Switch>
					<Route exact path='/' component={Home} />
					<PrivateRoute exact path='/eventdetails' component={EventDetailsPage} />
					<Route exact path='/check' component={Check} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/signin' render={(props) => <Signin {...props} />} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/otp' render={(props) => <Otp {...props} />} />
					<PrivateRoute exact path='/profile' component={Profile} />
					<Route exact path='/hostintro' component={HostIntro} />
					<Route component={Page404} />
				</Switch>

				<Footer />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
