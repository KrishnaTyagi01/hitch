import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
	activateLoginPrompt,
	deactivateLoginPrompt
} from '../../redux/actions/userActions';

// const promptLogin = (data) => <LoginPrompt data={data} />;

const LoginPrompt = (props) => {
	const [active, setActive] = useState(false);
	const loginPromptDiv = useRef(null);
	console.log(loginPromptDiv);
	// loginPromptDiv?.current.onclick = (e) => {

	const handleClick = (e) => {
		deactivateLoginPrompt();
		if (e.target == loginPromptDiv.current) props.deactivateLoginPrompt();
	};

	const redirected = () => {
		deactivateLoginPrompt();
	};

	return (
		<div
			className='login-prompt'
			ref={loginPromptDiv}
			style={{ display: props.loginPromptActive ? 'block' : 'none' }}
			onClick={handleClick}
		>
			<div className='content'>
				<div className='header'>
					<h3>You must be loggedin to proceed</h3>
				</div>
				<div className='body'>
					<div>
						<Link
							to={{ pathname: '/login', referrer: props.referrer }}
							className='redirectLink'
							onClick={redirected}
						>
							Login
						</Link>
					</div>
					<div>
						<Link
							to={{ pathname: '/register', referrer: props.referrer }}
							className='redirectLink'
							onClick={redirected}
						>
							Register
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	referrer: state.userState.referrer,
	loginPromptActive: state.userState.loginPromptActive
});

export default connect(mapStateToProps, {
	activateLoginPrompt,
	deactivateLoginPrompt
})(LoginPrompt);
