import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getEvents, incCount } from '../../redux/actions/commonActions';
import { login, logout } from '../../redux/actions/authActions';
import { getSelfProfile } from '../../redux/actions/profileActions';

function Test(props) {
	return (
		<div>
			<p>Test</p>
			<button
				onClick={() =>
					props.login({ username: 'prash1@gmail.com', password: 'Prash1234' }, () => {
						console.log('login request sent');
					})
				}
			>
				Login
			</button>
			<button onClick={props.logout}>Logout</button>
			<div>
				<p>{props.name && props.name}</p>
				<p>{props.username && props.username}</p>
				<p>{props.token && props.token}</p>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	events: state.eventState.events,
	count: state.eventState.count,
	name: state.authState.name,
	username: state.authState.username,
	token: state.authState.token,
	detail: state.profileState.detail
});

export default connect(mapStateToProps, {
	login,
	logout,
	getEvents,
	incCount,
	getSelfProfile
})(Test);
