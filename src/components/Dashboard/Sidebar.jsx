import React, { useRef } from 'react';
import profilePic from '../../icons/profile/userProfilePic.png';
import overviewIcon from '../../icons/dashboard/overview.svg';
import activityIcon from '../../icons/dashboard/activity.svg';
import eventsIcon from '../../icons/dashboard/events.svg';
import messagesIcon from '../../icons/dashboard/messages.svg';
import pricingIcon from '../../icons/dashboard/pricing.svg';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
	const ref5 = useRef(null);

	const onMyClick = (idx) => {
		props.onButtonClick(idx);
		ref1.current.className = 'sidebar__lower--part';
		ref2.current.className = 'sidebar__lower--part';
		ref3.current.className = 'sidebar__lower--part';
		ref4.current.className = 'sidebar__lower--part';
		ref5.current.className = 'sidebar__lower--part';

		const class_name = 'sidebar__lower--part sidebar_active';
		switch (idx) {
			case 0:
				ref1.current.className = class_name;
				break;
			case 1:
				ref2.current.className = class_name;
				break;
			case 2:
				ref3.current.className = class_name;
				break;
			case 3:
				ref4.current.className = class_name;
				break;
			case 4:
				ref5.current.className = class_name;

			default:
				return null;
		}
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__upper'>
				<img src={profilePic} alt='profile' className='sidebar__upper--pic' />
				<h2 className='sidebar__upper--name'>John Doe</h2>
			</div>
			<div className='sidebar__lower'>
				<span ref={ref1} className='sidebar__lower--part sidebar_active'>
					<div className='sidebar__lower--part_iconspan'>
						<img src={overviewIcon} alt='icon' className='sidebar__lower--icon' />
					</div>
					<button onClick={() => onMyClick(0)} className='sidebar__lower--button'>
						Overview
					</button>
				</span>
				<span ref={ref2} className='sidebar__lower--part'>
					<div className='sidebar__lower--part_iconspan'>
						<img src={activityIcon} alt='icon' className='sidebar__lower--icon' />
					</div>
					<button onClick={() => onMyClick(1)} className='sidebar__lower--button'>
						{' '}
						Notifications
					</button>
				</span>
				<span ref={ref3} className='sidebar__lower--part'>
					<div className='sidebar__lower--part_iconspan'>
						<img src={eventsIcon} alt='icon' className='sidebar__lower--icon' />
					</div>
					<button className='sidebar__lower--button' onClick={() => onMyClick(2)}>
						{' '}
						Events
					</button>
				</span>
				<span ref={ref4} className='sidebar__lower--part'>
					<div className='sidebar__lower--part_iconspan'>
						<img src={messagesIcon} alt='icon' className='sidebar__lower--icon' />
					</div>
					<button className='sidebar__lower--button' onClick={() => onMyClick(3)}>
						{' '}
						Messages
					</button>
				</span>
				<span ref={ref5} className='sidebar__lower--part'>
					<div className='sidebar__lower--part_iconspan'>
						<img src={pricingIcon} alt='icon' className='sidebar__lower--icon' />
					</div>
					<button className='sidebar__lower--button' onClick={() => onMyClick(4)}>
						{' '}
						Pricing Plan
					</button>
				</span>
			</div>
			<Link to='/events'>
				<div className='sidebar__exit'>
					{/* <img src="" alt=""/> */}
					<div className='sidebar__exit--iconspan'>
						<i className='fas fa-long-arrow-alt-left sidebar__exit--icon'></i>
					</div>
					<span>
						<button className='sidebar__exit--button'>Exit</button>
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Sidebar;
