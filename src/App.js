import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainRouter from './MainRouter';
import { getSelfProfile } from './redux/actions/profileActions';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/App.css';

function App(props) {
	let { isAuthenticated, getSelfProfile } = props;
	useEffect(() => {
		if (isAuthenticated) {
			getSelfProfile();
		}
	}, [isAuthenticated]);

	return <MainRouter />;
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { getSelfProfile })(App);
