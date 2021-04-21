import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import twitterIcon from '../../icons/Brands/twitterIcon.png';
import linkedInIcon from '../../icons/Brands/linkedInIcon.png';
import instagramIcon from '../../icons/Brands/instagramIcon.png';
import facebookIcon from '../../icons/Brands/facebookIcon.png';
import webIcon from '../../icons/Brands/webIcon.png';
// import gmailIcon from '../../icons/Brands/gmailIcon.svg';

const ProfileLinks = (props) => {
	const {
		social_media_profiles_sharable,
		facebook_profile_link,
		linkedin_profile_link,
		instagram_profile_link,
		twitter_profile_link,
		email,
		website
	} = props.profile ?? {};

	const profileLinks = [
		{ link: facebook_profile_link, label: 'facebook', icon: facebookIcon },
		{ link: linkedin_profile_link, label: 'linkedin', icon: linkedInIcon },
		{ link: instagram_profile_link, label: 'instagram', icon: instagramIcon },
		{ link: twitter_profile_link, label: 'twitter', icon: twitterIcon }
	];

	return (
		<div className='headersection__right'>
			{social_media_profiles_sharable ? (
				<Fragment>
					{profileLinks.map((item) => (
						<Fragment key={item.label}>
							{item.link ? (
								<a
									href={item.link}
									target='_blank'
									rel='noreferrer'
									className='headersection__right--link'
								>
									<img
										className='headersection__right--icon'
										src={item.icon}
										alt={item.label}
									/>
								</a>
							) : null}
						</Fragment>
					))}

					<a href={`mailto:${email}`} className='headersection__right--link'>
						<i className='far fa-envelope'></i>
					</a>

					{/* <a href='#' className='headersection__right--link'>
						<img className='headersection__right--icon' src={gmailIcon} alt='gmail' />
					</a> */}
				</Fragment>
			) : null}

			{website ? (
				<a
					href={website}
					target='_blank'
					rel='noreferrer'
					className='headersection__right--link'
				>
					<img className='headersection__right--icon' src={webIcon} alt='website' />
				</a>
			) : null}
		</div>
	);
};

const HeaderSection = (props) => {
	return (
		<div className='headersection'>
			<div className='headersection__left'>
				<NavLink
					exact
					to='/profile'
					className='headersection__left--about'
					activeStyle={{ color: 'var(--color-secondary-3)' }}
				>
					About
				</NavLink>
				<NavLink
					to='/profile/activity'
					className='headersection__left--activity'
					activeStyle={{ color: 'var(--color-secondary-3)' }}
				>
					Activity
				</NavLink>
			</div>
			<ProfileLinks profile={props.profile} />
		</div>
	);
};

export default withRouter(HeaderSection);
