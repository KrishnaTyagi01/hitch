import React from 'react';
import { connect } from 'react-redux';

import { getEvents, incCount } from '../redux/actions/commonActions';
import { login, logout } from '../redux/actions/authActions';
import { getSelfProfile } from '../redux/actions/profileActions';
import { useState } from 'react/cjs/react.development';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	const onLogin = () => {
		props.login({ username: user, password: pass }, () => {
			console.log('login request sent');
		});
	};

	const isLoggedIn = () => {
		if (props.name && props.username && props.token) {
			console.log('logged in');
			return <Redirect to='/profile' />;
		}
	};

	return (
		<div className='registerContainer'>
			<div className='signin'>
				<h2 className='signin__heading'>Login</h2>
				<div className='signin__mid'>
					<label className='signin__mid--before'>Username</label>
					<input
						className='signin__mid--input'
						value={user}
						onChange={(e) => setUser(e.target.value)}
						id='username'
						placeholder='Username'
						type='text'
					/>
				</div>
				<div className='signin__mid'>
					<label className='signin__mid--before'>Password</label>
					<input
						className='signin__mid--input'
						id='pass'
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						placeholder='Password'
						type='password'
					/>
				</div>
				<button className='signin__btn' onClick={onLogin}>
					Enter
				</button>
				{isLoggedIn()}
			</div>
		</div>
	);

	// <div className="registerContainer">
	// 		<div className="signin">
	// 			<h2 className="signin__heading">Register User</h2>
	// 			<div className="signin__mid">
	// 				{/* <span className="signin__mid--before">Name</span>
	// 				<input onChange={handleChange('name')} type="text" className="signin__mid--input"
	// 					placeholder="Enter Your Name Here" /> */}
	// 				<span className="signin__mid--before">Email or Phone Number</span>
	// 				<input onChange={handleChange('email')} type="text" className="signin__mid--input"
	// 					placeholder="Enter Your Email or Phone Number Here" />
	// 				<span className="signin__mid--before">Password</span>
	// 				<input onChange={handleChange('password')} type="password" className="signin__mid--input"
	// 					placeholder="Enter Your Password" />
	// 			</div>
	// 			<button onClick={handleClick} className="signin__btn">Enter</button>
	// 		</div>
};

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
})(Login);
