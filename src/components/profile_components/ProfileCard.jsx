import React from 'react';
import {Link} from 'react-router-dom'
import userProfilePic from '../../icons/profile/userProfilePic.png';
import jobIcon from '../../icons/profile/jobIcon.svg';
import buildingIcon from '../../icons/profile/buildingIcon.svg';
import followersIcon from '../../icons/profile/followersIcon.svg';
import locationIcon from '../../icons/profile/locationIcon.svg';
import leftArrowIcon from '../../icons/profile/leftArrowIcon.svg';
import pinIcon from '../../icons/profile/pinIcon.svg';
import yellowDotIcon from '../../icons/profile/yellowDotIcon.svg';
import profilePicIcon from '../../icons/profile/profilePicIcon.svg';


const ProfileCard = () => {
    return (
        <div className="profilecard">
            <div className="profilecard__wrapper">
            <div className="profilecard__upper">
                <Link className="profilecard__upper--left">
                    <img src={leftArrowIcon} alt="icon" className="profilecard__upper--leftarrowicon" />
                   Back
                </Link>
                <span className="profilecard__upper--right">
                    <img src={yellowDotIcon} alt="icon" className="profilecard__upper--yellowdoticon" />
                    <img src={yellowDotIcon} alt="icon" className="profilecard__upper--yellowdoticon" />
                    <img src={yellowDotIcon} alt="icon" className="profilecard__upper--yellowdoticon" />
                </span>
            </div>
            <div className="profilecard__mid">
                <img className="profilecard__mid--pic" src={userProfilePic} alt="profile pic" />
                <h3 className="profilecard__mid--name">John Doe</h3>
            </div>
            <div className="profilecard__lower">
                <div className="profilecard__lower--item">
                    <img src={jobIcon} alt="icon" className="profilecard__lower--icon" />
                        <span className="profilecard__lower--text">Software Development</span>
                </div>
                <div className="profilecard__lower--item">
                    <img src={buildingIcon} alt="icon" className="profilecard__lower--icon" />
                    <span className="profilecard__lower--text">Microsoft, Mumbai IN</span>
                </div>
                <div className="profilecard__lower--item">
                    <img src={profilePicIcon} alt="icon" className="profilecard__lower--icon" />
                    <span className="profilecard__lower--text">25 Mutual Connections</span>
                </div>
                <div className="profilecard__lower--item">
                    <img src={followersIcon} alt="icon" className="profilecard__lower--icon" />
                    <span className="profilecard__lower--text">137 followers</span>
                </div>
                <div className="profilecard__lower--item">
                    <img src={locationIcon} alt="icon" className="profilecard__lower--icon " />
                    <span className="profilecard__lower--text" id="profile__lower--locationtext">Mumbai IN</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileCard;