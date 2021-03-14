import { Link } from 'react-router-dom';
import twitterIcon from '../../icons/profile/twitterIcon.svg';
import linkedInIcon from '../../icons/profile/linkedInIcon.svg';
import instagramIcon from '../../icons/profile/instagramIcon.svg';
import gmailIcon from '../../icons/profile/gmailIcon.svg';
import facebookIcon from '../../icons/profile/facebookIcon.svg';
import webIcon from '../../icons/profile/webIcon.svg';
import fIcon from '../../icons/profile/fIcon.svg';

import linkedInIcon2 from '../../icons/linkedInIcon.svg';

const HeaderSection = () => {
	return (
		<div className='headersection'>
			<div className='headersection__left'>
				<Link to='#' className='headersection__left--about'>
					About
				</Link>
				<Link to='#' className='headersection__left--activity'>
					Activity
				</Link>
			</div>
			<div className='headersection__right'>
				<a href='#' className='headersection__right--link'>
					<img className='headersection__right--icon' src={twitterIcon} alt='twitter' />
				</a>
				<a href='#' className='headersection__right--link'>
					<img
						className='headersection__right--icon'
						src={linkedInIcon2}
						alt='linkedIn'
					/>
				</a>
				<a href='#' className='headersection__right--link'>
					<img
						className='headersection__right--icon'
						src={instagramIcon}
						alt='instagram'
					/>
				</a>
				<a href='#' className='headersection__right--link'>
					<img className='headersection__right--icon' src={gmailIcon} alt='gmail' />
				</a>
				<a href='#' className='headersection__right--link'>
					<img className='headersection__right--icon' src={fIcon} alt='facebook' />
				</a>
				<a href='#' className='headersection__right--link'>
					<img className='headersection__right--icon' src={webIcon} alt='web' />
				</a>
			</div>
		</div>
	);
};

export default HeaderSection;
