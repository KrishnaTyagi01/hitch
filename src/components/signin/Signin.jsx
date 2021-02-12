import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { loginUser, authenticate } from '../../API/Auth';

import { connect } from 'react-redux';
import { getAuthToken } from '../../Redux/Actions';

const SigninComponent = (props) => {

	const email = props.location.state.email;
	const [values, setValues] = useState({
		password: '',
		error: '',
		loading: false,
		redirectUser: false
	})
	const { password, error, loading, redirectUser } = values;


	const redirectToProfile = () => {
		if (redirectUser)
			return (
				<Redirect to='/profile' />
			)
	}

	const handleChange = inputName => e => {
		setValues({ ...values, [inputName]: e.target.value })
	}

	const handleClick = () => {
		loginUser({ username: email, password: password })
			.then(async res => {
				if (res.success) {
					await props.getAuthToken(res.token);
					await authenticate({ name: res.name, username: res.username, token: res.token }, () => {
						setValues({ ...values, redirectUser: true })
					})
				} else {
					console.log(res.non_field_errors);
					setValues({ ...values, error: res.non_field_errors, loading: false })
				}
			})
	}

	return (
		<>
			<div className="signin">
				<h2 className="signin__heading">Log In</h2>
				<div className="signin__mid">
					<span className="signin__mid--before">Password</span>
					<input onChange={handleChange('password')} type="password" className="signin__mid--input"
						placeholder="Enter Your Password" />
				</div>
				<button onClick={handleClick} className="signin__btn">Enter</button>
			</div>
			{redirectToProfile()}
		</>
	)
}

const mapStateToProps = state => {
	console.log(state);
	return { auth_token: state.auth_token };
}

export default connect(mapStateToProps, { getAuthToken })(SigninComponent);