// import { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { registerUser, authenticate, CheckUserExist } from '../../API/Auth';
import { useEffect, useState } from 'react/cjs/react.development';
import { validateOtp } from '../../API/Auth';
import { getEvents, incCount } from '../../redux/Actions/commonActions';
import { login, logout } from '../../redux/Actions/authActions';
import { getSelfProfile } from '../../redux/Actions/profileActions';

import { connect } from 'react-redux';


const RegisterComponent = (props) => {

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		loading: false,
		redirectUser: false,
		otp: ''
	})
	const { name, email, password, error, loading, redirectUser, otp } = values;


	const redirectToProfile = () => {
		if (redirectUser)
			return (
				<Redirect to='/profile' />
			)
	}

	const handleChange = inputName => e => {
		setValues({ ...values, [inputName]: e.target.value })
	}

	const handleClick = async () => {
		const res = await CheckUserExist(email);
		console.log(res);
	}

	const validate = async () => {
		const res1 = await validateOtp(email, otp);
		console.log(res1);
		const res = await registerUser({
			email: email,
			name: name,
			password: password
		});
		console.log(res);

		onLogin();
	}

	const onLogin = () => {
		props.login({ username: email, password: password }, () => {
			console.log('login request sent');
		})
	}

	const isLoggedIn = () => {
		if (props.redux_name && props.redux_username && props.redux_token) {
			console.log("logged in");
			return <Redirect to="/profile" />
		}
	}

	return (
		<div className="registerContainer">
			<div className="signin">
				<h2 className="signin__heading">Register User</h2>
				<div className="signin__mid">
					<span className="signin__mid--before">Name</span>
					<input onChange={handleChange('name')} type="text" className="signin__mid--input"
						placeholder="Enter Your Name Here" />
					<span className="signin__mid--before">Email or Phone Number</span>
					<input onChange={handleChange('email')} type="text" className="signin__mid--input"
						placeholder="Enter Your Email or Phone Number Here" />
					<span className="signin__mid--before">Password</span>
					<input onChange={handleChange('password')} type="password" className="signin__mid--input"
						placeholder="Enter Your Password" />
				</div>
				<button onClick={handleClick} className="signin__btn">Enter</button>
				<div className="signin__mid">
					<span className="signin__mid--before">OTP</span>
					<input onChange={handleChange('otp')} type="otp" className="signin__mid--input"
						placeholder="Enter Your OTP" />
				</div>
				<button onClick={validate} className="signin__btn">Validate</button>
				{isLoggedIn()}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	redux_events: state.eventState.events,
	redux_count: state.eventState.count,
	redux_name: state.authState.name,
	redux_username: state.authState.username,
	redux_token: state.authState.token,
	redux_detail: state.profileState.detail
});

export default connect(mapStateToProps, {
	login,
	logout,
	getEvents,
	incCount,
	getSelfProfile
})(RegisterComponent);