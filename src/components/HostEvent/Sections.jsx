import { NavHashLink } from 'react-router-hash-link';

const Sections = () => {
	return (
		<div className='linkToSections'>
			<nav className='list'>
				<NavHashLink to='#basics' className='nav-link' activeClassName='active-link'>
					Basics
				</NavHashLink>
				<NavHashLink to='#pictures' className='nav-link' activeClassName='active-link'>
					Pictures
				</NavHashLink>
				{/* <NavHashLink to='#host' className='nav-link' activeClassName='active-link'>
					Host and Speakers
				</NavHashLink> */}
				<NavHashLink to='#schedule' className='nav-link' activeClassName='active-link'>
					Schedule and Timeline
				</NavHashLink>
				<NavHashLink to='#pricing' className='nav-link' activeClassName='active-link'>
					Pricing
				</NavHashLink>
				<NavHashLink to='#tags' className='nav-link' activeClassName='active-link'>
					Tags
				</NavHashLink>
				<NavHashLink to='#location' className='nav-link' activeClassName='active-link'>
					Location
				</NavHashLink>
				{/* <NavHashLink to='#overview' className='nav-link' activeClassName='active-link'>
					Overview
				</NavHashLink> */}
				<NavHashLink to='#additional' className='nav-link' activeClassName='active-link'>
					Additional Info
				</NavHashLink>

				<NavHashLink to='#post' className='nav-link' activeClassName='active-link'>
					Post Event
				</NavHashLink>
			</nav>
		</div>
	);
};

export default Sections;
