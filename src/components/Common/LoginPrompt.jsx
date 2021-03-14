import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { deactivateLoginPrompt } from '../../redux/actions/userActions';

const LoginPrompt = (props) => {
	let referrer = useLocation().pathname;

	const loginPrompt = useRef(null);
	const loginPromptContent = useRef(null);

	const handleOutsideClick = (e) => {
		if (loginPromptContent.current && !loginPromptContent.current.contains(e.target)) {
			props.deactivateLoginPrompt();
		}
	};

	useEffect(() => {
		loginPrompt.current.addEventListener('click', handleOutsideClick);
		document.body.addEventListener('keyup', (e) => {
			if (e.keyCode === 27) {
				props.deactivateLoginPrompt();
			}
		});

		return () => {
			console.log('clean up');
			// document.body.removeEventListener('keyup');
			// console.log('removed listener');
		};
	}, [loginPrompt]);

	return (
		<div
			className={`login-prompt ${props.loginPromptActive ? 'show-login-prompt' : null}`}
			ref={loginPrompt}
		>
			<div className='login-prompt__content' ref={loginPromptContent}>
				<h3 className='prompt-header'>You must be loggedin to proceed</h3>
				<button className='prompt-close' onClick={props.deactivateLoginPrompt}>
					<i className='fas fa-times-circle fa-2x'></i>
				</button>
				<hr />
				<div className='prompt-links'>
					<Link to={{ pathname: '/login', referrer: referrer }} className='redirectLink'>
						Login
					</Link>
					<Link
						to={{ pathname: '/register', referrer: referrer }}
						className='redirectLink'
					>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loginPromptActive: state.userState.loginPromptActive
});

export default connect(mapStateToProps, {
	deactivateLoginPrompt
})(LoginPrompt);
