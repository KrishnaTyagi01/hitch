import React from 'react';

const Messages = () => {
    return (
        <div className="Messages">
            <div className="Messages_container">
                <div className="new">
                    <div className="header">
                        NEW
                    </div>
                    <div className="content">
                        Nothing Here !
                    </div>
                </div>
                <div className="old">
                    <div className="header">
                        OLD
                    </div>
                    <div className="content">
                        Nothing Here !
                    </div>
                </div>
            </div>
            <div className="Messages_view">

            </div>
        </div>
    );
}

export default Messages;