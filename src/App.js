import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainRouter from './MainRouter';
import { getSelfProfile, getSelfEvents } from './redux/actions/profileActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';

function App(props) {
	const { isAuthenticated, getSelfProfile, getSelfEvents } = props;
	console.log({ isAuthenticated, getSelfProfile, getSelfEvents });
	console.log(Boolean(isAuthenticated));

	useEffect(() => {
		if (isAuthenticated) {
			console.log(Boolean(isAuthenticated));
			getSelfProfile();
			getSelfEvents();
		}
	}, [isAuthenticated]);

	return <MainRouter />;
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { getSelfProfile, getSelfEvents })(App);
