import React from 'react'
import ShowInfoCard from '../components/Landing/ShowInfoCard'
import Filter from '../components/myEvents/Filter'
import Upper from '../components/myEvents/Upper'
import Sidebar from '../components/Dashboard/Sidebar'
function Check() {
    return (
        <div>
            {/* <Upper />
            <Filter />   */}
            <ShowInfoCard />   
            <Sidebar />
        </div>
    )
}

export default Check
