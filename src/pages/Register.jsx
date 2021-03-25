import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser, CheckUserExist } from '../API/Auth';
import { validateOtp } from '../API/Auth';
import { login } from '../redux/actions/authActions';
import { deactivateLoginPrompt } from '../redux/actions/userActions';

import FacebookLoginBtn from 'react-facebook-login';
import SignInWithGoogle from '../components/signin/SignInWithGoogle';

var gapi = window.gapi;
const CLIENT_ID = '1001904143961-1irvhehco0vna3ft694nfu0hrmmn9iks.apps.googleusercontent.com';
const API_KEY = 'AIzaSyD0JPXFGJPzh9OMDH2dTYW1caEyxnU4DsQ';

const Register = (props) => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		loading: false,
		redirectUser: false,
		otp: ''
	});
	const { name, email, password, otp } = values;
	const [otpSent, setOtpSent] = useState(false);

	const handleChange = (inputName) => (e) => {
		setValues({ ...values, [inputName]: e.target.value });
	};

	const handleClick = async () => {
		const res = await CheckUserExist(email);
		if (res.status === 200) {
			setOtpSent(true);
		}
		console.log(res);
	};

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
	};

	const onLogin = () => {
		props.login({ username: email, password: password }, () => {
			console.log('login request sent');
		});
	};

	useEffect(() => {
		props.deactivateLoginPrompt();
	}, [props]);

	if (props.isAuthenticated) {
		console.log('already logged in');
		return <Redirect to='/profile' />;
	}

	// const componentClicked = () => {
	// 	console.log('Btn Clicked');
	// }

	// const responseFacebook = (res) => {
	// 	console.log(res);
	// }

	const logInFB = () => {
		window.FB.login(function (response) {
			console.log(response);
		}, { scope: 'public_profile,email' });
	}

	const logOutFB = () => {
		window.FB.logout(function (response) {
			console.log(response);
		});
	}



	return (
		<>
			<div className='registerContainer'>
				<div className='signin'>
					<h2 className='signin__heading'>Register User</h2>
					<div className='signin__mid'>
						<span className='signin__mid--before'>Name</span>
						<input
							onChange={handleChange('name')}
							type='text'
							className='signin__mid--input'
							placeholder='Enter Your Name Here'
						/>
						<span className='signin__mid--before'>Email or Phone Number</span>
						<input
							onChange={handleChange('email')}
							type='text'
							className='signin__mid--input'
							placeholder='Enter Your Email or Phone Number Here'
						/>
						<span className='signin__mid--before'>Password</span>
						<input
							onChange={handleChange('password')}
							type='password'
							className='signin__mid--input'
							placeholder='Enter Your Password'
						/>
					</div>

					<button onClick={handleClick} className='signin__btn'>
						Enter
				</button>

					{otpSent ? (
						<>
							<div className='otp_sent'>{`OTP Sent to ${email}`}</div>
							<div className='signin__mid'>
								<span className='signin__mid--before'>OTP</span>
								<input
									onChange={handleChange('otp')}
									type='otp'
									className='signin__mid--input'
									placeholder='Enter Your OTP'
								/>
							</div>
							<button onClick={validate} className='signin__btn'>
								Validate
						</button>
						</>
					) : null}
				</div>
			</div>
			{/* <FacebookLoginBtn
				appId="311871003618208"
				autoLoad={false}
				fields="name,email,picture"
				onClick={componentClicked}
				callback={responseFacebook}
			/> */}

			<button className="log_in" onClick={logInFB}>
				Login with Facebook
			</button>
			<button className="log_out" onClick={logOutFB}>
				LogOut of Facebook
			</button>

			<SignInWithGoogle />
		</>

	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.authState.isAuthenticated
});

export default connect(mapStateToProps, {
	login,
	deactivateLoginPrompt
})(Register);
