import { useState } from 'react';
import {Redirect} from 'react-router-dom'
import {validateOtp} from '../../API/Auth';

const OtpComponent = (props)=>{
	const email = props.location.state.email;
	const [toReg, SetToReg] = useState(false);


	const [values, setValues] = useState({
		otp:'',
		error:'',
		success: '',
		loading: false,
		redirectUser: false
	})
	const { otp, error, loading, redirectUser } = values;
   

	const handleChange = (e)=>{
		setValues({...values, otp: e.target.value});
	}

	const redirectToReg = () =>{
		if(toReg){
		 return <Redirect to = '/register' />
		}
	}
	const handleClick = () =>{
	   validateOtp({username: email, otp:otp})
	   .then(res=>{
		   if(res.success == true){
			   console.log('reached here')
			console.log(res);
			setValues({...values, success: res.message, loading:true})
			SetToReg(true)
		   } else{
			   console.log(res)
			   console.log(res.message);
			   setValues({...values, error: res.message, loading:false})
		   }
	   })
	}

	return (
		<>
		<div className="signin">
			<h2 className="signin__heading">OTP</h2>
			<div className="signin__mid">
				<span className="signin__mid--before">Enter the Otp below</span>
				<input onChange={handleChange} type="text" className="signin__mid--input"
				 placeholder="Enter the OTP Here"/>
			</div>
			<button onClick={handleClick} className="signin__btn">Enter</button>
		</div>
		{redirectToReg()}
		</>
	)
}

export default OtpComponent;