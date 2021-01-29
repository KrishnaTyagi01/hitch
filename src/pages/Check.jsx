import React from 'react'
import ShowInfoCard from '../components/Landing/ShowInfoCard'
import Filter from '../components/myEvents/Filter'
import Upper from '../components/myEvents/Upper'
import Sidebar from '../components/Dashboard/Sidebar'
import Nav from '../components/Dashboard/Nav'
import ReviewBox from '../components/Dashboard/ReviewBox'
import ConnectionReq from '../components/Dashboard/ConnectionReq'
import Message from '../components/Dashboard/Message'
import Base from '../components/Dashboard/Base'
import PricingPlan from '../components/Dashboard/PricingPlan'
function Check() {
    return (
        <div>
            {/* <Upper />
            <Filter />   */}
            {/* <ShowInfoCard />    */}
            {/* <Sidebar /> */}
            {/* <Nav />
            <ReviewBox />
            <ConnectionReq /> */}
             <Message />
            {/* <Base /> */} 
            <PricingPlan />
        </div>
    )
}

export default Check
