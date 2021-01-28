import React from 'react';
import profilePic from '../../icons/profile/userProfilePic.png';
import overviewIcon from '../../icons/dashboard/overview.svg';
import activityIcon from '../../icons/dashboard/activity.svg';
import eventsIcon from '../../icons/dashboard/events.svg';
import messagesIcon from '../../icons/dashboard/messages.svg';
import pricingIcon from '../../icons/dashboard/pricing.svg';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__upper">
				<img src={profilePic} alt="profile photo" className="sidebar__upper--pic" />
				<h2 className="sidebar__upper--name">John Doe</h2>
			</div>
			<div className="sidebar__lower">
				<span className="sidebar__lower--part">
					<img src={overviewIcon} alt="icon" className="sidebar__lower--icon"/>
					<button className="sidebar__lower--button">Overview</button> 
				</span>
				<span className="sidebar__lower--part">
					<img src={activityIcon} alt="icon" className="sidebar__lower--icon"/>
					<button className="sidebar__lower--button"> Activity</button>
				</span>
				<span className="sidebar__lower--part">
					<img src={eventsIcon} alt="icon" className="sidebar__lower--icon"/>
					  <button className="sidebar__lower--button"> Events</button>
				</span>
				<span className="sidebar__lower--part">
					<img src={messagesIcon} alt="icon" className="sidebar__lower--icon"/>
					  <button className="sidebar__lower--button"> Messages</button>
				</span>
				<span className="sidebar__lower--part">
					<img src={pricingIcon} alt="icon" className="sidebar__lower--icon"/>
					  <button className="sidebar__lower--button"> Pricing Plan</button>
				</span>
			</div>

			<div className="sidebar__exit">
				{/* <img src="" alt=""/> */}
				<div className="sidebar__exit--iconspan">
					<i className="fas fa-long-arrow-alt-left sidebar__exit--icon"></i>
				</div>
				<span >
						<button className="sidebar__exit--button">Exit</button>
				</span>                
			</div>

		</div>
	)
}

export default Sidebar
