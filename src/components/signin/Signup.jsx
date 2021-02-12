import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { CheckUserExist, getProfile } from '../../API/Auth';

const SignupComponent = () => {

	const [email, setEmail] = useState('');
	const [userExists, setUserExists] = useState(false);
	const [toSignin, SetToSignin] = useState(false);
	const [toOtp, SetToOtp] = useState(false);
	const handleChange = (e) => {
		setEmail(e.target.value);
	}

	const redirectToSignin = () => {
		if (toSignin) {
			return <Redirect
				to={{
					pathname: "/signin",
					state: { email: email }
				}}
			/>
		}
	}
	const redirectToOtp = () => {
		if (toOtp) {
			return <Redirect
				to={{
					pathname: "/otp",
					state: { email: email }
				}}
			/>
		}
	}

	const handleClick = () => {
		CheckUserExist({ username: email })
			.then(res => {
				// console.log(res);
				if (res.user_exists) {
					setUserExists(true);
					SetToSignin(true)
				}
				else {
					SetToOtp(true);
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	return (
		<>
			<div className="signin">
				<h2 className="signin__heading">Sign Up/Log In</h2>
				<div className="signin__mid">
					<span className="signin__mid--before">Email or Phone Number</span>
					<input onChange={handleChange} type="text" className="signin__mid--input"
						placeholder="Enter Your Email or Phone Number Here" />
				</div>
				<button onClick={handleClick} className="signin__btn">Enter</button>
			</div>
			{redirectToSignin()}
			{redirectToOtp()}
		</>
	)
}

export default SignupComponent;