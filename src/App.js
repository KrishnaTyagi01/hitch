import './App.css'
import Navbar from './components/navbar/Navbar'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Check from './pages/Check';
import Otp from './pages/Otp';
import EventDetailsPage from './pages/EventDetailsPage';
import Profile from './pages/Profile'
import HostIntro from './pages/HostIntro'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './API/ProtectedRoute'
import Filter from './components/myEvents/Filter'
// import Landing from './components/Landing/Landing';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute exact path="/" component={EventDetailsPage} />
				<Route exact path="/check"><Check /></Route>
				{/* <Route exact path="/landing"><Landing /></Route> */}
				<Route exact path="/signup"> <Signup /></Route>
				<Route exact path="/signin" render={props=> <Signin {...props} />} /> 
				<Route exact path="/register"> <Register /></Route>
				<Route exact path="/otp" render={props=> <Otp {...props}/>}/> 
				<PrivateRoute exact path="/profile" component={Profile} />
				<Route exact path="/hostintro"> <HostIntro /></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
