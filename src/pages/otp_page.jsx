import { useEffect, useState } from 'react/cjs/react.development';
import { registerUser, validateOtp } from '../API/Auth';

const Otp_Page = (props) => {
	const [otp, setOtp] = useState('');

	useEffect(() => {
		console.log({ props });
	});

	const validate = async () => {
		// props.location.state.property_id
		const res1 = await validateOtp(props.location.state.email, otp);
		console.log(res1);
		const res = await registerUser({
			email: props.location.state.email,
			name: props.location.state.name,
			password: props.location.state.password
		});
		console.log(res);
	};

	return (
		<div className='otp_page'>
			<input value={otp} onChange={(e) => setOtp(e.target.value)} type='text'></input>
			<button onClick={validate}> Evaluate </button>
		</div>
	);
};

export default Otp_Page;
