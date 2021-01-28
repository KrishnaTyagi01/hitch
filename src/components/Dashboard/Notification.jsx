import React from 'react'
// import userNotificationPic from '../../icons/dashboard/userNotification.svg'
import userProfilePic from '../../icons/profile/userProfilePic.png';

function Notification() {
    return (
        <div className="notification">
            <span className="notification__info">
                <img src={userProfilePic} alt="pic" className="notification__info--pic"/>
                <span className="notification__info--msgspan">
                  <span style={{marginRight:'10px'}}>New Message</span> :
                  <span style={{marginLeft:'10px'}}>Dean Smith</span>
                </span>
            </span>
            <span className="notification__buttons">
                <button className="notification__buttons--btncomment"><i class="far fa-comment-dots" /></button>
                <button className="notification__buttons--btndelete"><i class="far fa-trash-alt" /></button>
            </span>
        </div>
    )
}

export default Notification
