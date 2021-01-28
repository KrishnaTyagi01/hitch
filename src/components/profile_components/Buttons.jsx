import React from 'react';
import pinIcon from '../../icons/profile/pinIcon.svg';
import followerIcon from '../../icons/profile/followersIcon.svg';


export const ConnectionButton = ()=>{
	return (
		<button className="connectionbtn">
			<img src={pinIcon} alt="connection btn" className="connectionbtn__icon"/>
			Send Connection Request
		</button>
	)
}

export const FollowButton = () =>{
	return (
		<button className="followbtn">
			<img src={followerIcon} alt="follow btn" className="followbtn__icon"/>
			Follow
		</button>
	)
} 