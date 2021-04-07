import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { login } from '../redux/actions/authActions';
import { deactivateLoginPrompt } from '../redux/actions/userActions';

const Login = (props) => {
	const [state, setState] = useState({
		email: '',
		password: ''
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.login({ username: state.email, password: state.password }, () => {
			props.history.push(props.location.state?.referrer ?? '/');
		});
	};

	useEffect(() => {
		props.deactivateLoginPrompt();
	}, [props]);

	if (props.isAuthenticated) {
		return <Redirect to='/' />;
	}

	return (
		<div className='login'>
			<Helmet>
				<title>Login | Mezami</title>
			</Helmet>
			{props.location.state?.message ? (
				<div className='login-message'>
					<h4>{props.location.state.message}</h4>
				</div>
			) : null}
			<form className='login-form' onSubmit={handleSubmit}>
				<h2 className='heading'>Login</h2>

				<div className='field'>
					<label>Email</label>
					<input
						required
						type='email'
						name='email'
						onChange={handleChange}
						placeholder='Enter Your Email Here'
					/>
				</div>
				<div className='field'>
					<label>Password</label>
					<input
						required
						type={showPassword ? 'text' : 'password'}
						name='password'
						onChange={handleChange}
						placeholder='Enter Your Password'
					/>
					<span
						className='toggle-password'
						onClick={() => {
							setShowPassword(!showPassword);
						}}
					>
						{!showPassword ? (
							<i className='fas fa-eye-slash'></i>
						) : (
							<i className='fas fa-eye'></i>
						)}
					</span>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { login, deactivateLoginPrompt })(Login);
