import React from 'react';

import ReviewBox from './ReviewBox';

const ReviewPage = () => {
    return (
        <div className="overviewContainer">
            <ReviewBox />
            <div className="hrLine"></div>
            <div className="LastEvent">
                <div className="LastEvent_header">
                    Last Event’s Performace
                        </div>
                <div className="LastEvent_content">
                    Nothing Here
                        </div>
            </div>
            <div className="Audience">
                <div className="Audience_header">
                    Total Audience
                        </div>
                <div className="Audience_content">
                    Nothing Here
                        </div>
            </div>
        </div>
    );
}

export default ReviewPage;


