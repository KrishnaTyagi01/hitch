import react from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SigninComponent from '../components/signin/Signin';

const Signin = (props)=>{
    return(
        <>
        <Navbar />
         <SigninComponent {...props} />
        <Footer />
        </>
    )
}

export default Signin;