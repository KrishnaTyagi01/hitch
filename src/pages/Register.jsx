import react from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import RegisterComponent from '../components/signin/Register';

const Register = ()=>{
	return(
		<>
		<Navbar />
		 <RegisterComponent />
		<Footer />
		</>
	)
}

export default Register;