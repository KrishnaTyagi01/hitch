import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory, Redirect } from 'react-router-dom';

import { login } from '../redux/actions/authActions';
import { getSelfProfile } from '../redux/actions/profileActions';

const LoginComponentOld = (props) => {
	const isLoggedIn = () => {
		if (props.isAuthenticated) {
			console.log('already logged in');
			return <Redirect to='/profile' />;
		}
	};

	const [state, setState] = useState({
		email: '',
		password: ''
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	let history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		props.login({ username: state.email, password: state.password }, () => {
			props.getSelfProfile();
			history.push(props.location.referrer ?? '/');
		});
	};

	return (
		<div className='login'>
			<form className='form-container' onSubmit={handleSubmit}>
				<h2 className='heading'>Login</h2>

				<div className='field'>
					<label>Email</label>
					<input
						required
						type='text'
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
			{isLoggedIn()}
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, { login, getSelfProfile })(
	withRouter(LoginComponentOld)
);
