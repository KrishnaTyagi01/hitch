import React from 'react';
import ConnectionReq from './ConnectionReq';

const Notif = () => {
    return (
        <div className="Notif">
            <div className="Notif_list">
                <div className="new">
                    <div className="new_header">
                        NEW
                    </div>
                    <div className="new_content">
                        Nothing Here !
                    </div>
                </div>
                <div className="old">
                    <div className="old_header">
                        OLD
                    </div>
                    <div className="old_content">
                        Nothing Here !
                    </div>
                </div>
            </div>
            <div className="Notif_preview">
                {/* <ConnectionReq /> */}
            </div>
        </div>
    );
}

export default Notif;