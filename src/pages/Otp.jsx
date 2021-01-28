import react from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import OtpComponent from '../components/signin/Otp';

const Otp = (props)=>{
	return(
		<>
		<Navbar />
		 <OtpComponent {...props}/> 
		<Footer /> 
		</>
	)
}

export default Otp;