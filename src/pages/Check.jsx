// import ShowInfoCard from '../components/Landing/ShowInfoCard'
// import Filter from '../components/myEvents/Filter'
// import Upper from '../components/myEvents/Upper'
// import Sidebar from '../components/Dashboard/Sidebar'
// import Nav from '../components/Dashboard/Nav'
// import ReviewBox from '../components/Dashboard/ReviewBox'
// import ConnectionReq from '../components/Dashboard/ConnectionReq'
// import Base from '../components/Dashboard/Base'
import Message from '../components/Dashboard/Message';
import PricingPlan from '../components/Dashboard/Page_PricingPlan';
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

function Check() {
    return (
        <div>
            <Navbar />
            <Message />
            {/* <Base /> */}
            <PricingPlan />
            <Footer />
        </div>
    );
}

export default Check;
