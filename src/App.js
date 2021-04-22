import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainRouter from './MainRouter';
import { getSelfProfile, getSelfEvents } from './redux/actions/profileActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';

// have to fix auth issues on server restart
function App(props) {
	const { isAuthenticated, getSelfProfile, getSelfEvents } = props;

	useEffect(() => {
		console.log('app.js render');
		console.log(process.env.REACT_APP_HOME_PAGE);
		if (isAuthenticated) {
			getSelfProfile();
			getSelfEvents();
		}
	}, [props]);

	return <MainRouter />;
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { getSelfProfile, getSelfEvents })(App);
