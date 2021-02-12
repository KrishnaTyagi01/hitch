import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Message from './Message';
import Nav from './Nav';
import ReviewPage from './Page_Review';
import Notif from './Page_Notification';
import Messages from './Page_Messages';
import PricingPlan from './Page_PricingPlan';
import Events from './Page_Events';
// import { useState } from 'react';

const Temp = () => {
    const [idx, setIdx] = useState(0);

    const renderIt = () => {
        switch (idx) {
            case 0:
                return <ReviewPage />;
            case 1:
                return <Notif />;
            case 2:
                return <Events />;
            case 3:
                return <Messages />;
            case 4:
                return <PricingPlan />;
        }
    }

    const onButtonClick = (curr_idx) => {
        console.log(curr_idx);
        setIdx(curr_idx);
    }

    return (
        <div className="mainDashboardContainer">
            <Nav />
            <div className="mainDashboardContainer_grid">
                <div>
                    <Sidebar onButtonClick={onButtonClick} />
                </div>
                <div className="mainDashboardContainer_grid_content">
                    {renderIt()}
                </div>
            </div>


        </div>
    );
}

export default Temp;