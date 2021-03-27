import { Link } from 'react-router-dom';

import twitterIcon from '../../icons/Brands/twitterIcon.svg';
import linkedInIcon from '../../icons/Brands/linkedInIcon.svg';
import instagramIcon from '../../icons/Brands/instagramIcon.svg';
import gmailIcon from '../../icons/Brands/gmailIcon.svg';
import facebookIcon from '../../icons/Brands/facebookIcon.svg';
import webIcon from '../../icons/webIcon.svg';

const ProfileLinks = () => (
	<div className='headersection__right'>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={twitterIcon} alt='twitter' />
		</a>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={linkedInIcon} alt='linkedIn' />
		</a>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={instagramIcon} alt='instagram' />
		</a>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={gmailIcon} alt='gmail' />
		</a>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={facebookIcon} alt='facebook' />
		</a>
		<a href='#' className='headersection__right--link'>
			<img className='headersection__right--icon' src={webIcon} alt='web' />
		</a>
	</div>
);

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
			<ProfileLinks />
		</div>
	);
};

export default HeaderSection;
