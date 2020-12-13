import react from 'react';
import {Link, withRouter} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Carousel from '../components/event_components/Carousel';
import SignupComponent from '../components/signin/Signup';

const Signup = ()=>{
    return(
        <>
        <Navbar />
         <SignupComponent />
        <Footer />
        </>
    )
}

export default Signup;