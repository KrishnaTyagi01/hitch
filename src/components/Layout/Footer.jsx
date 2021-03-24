import { Link } from 'react-router-dom';

import emailIcon from '../../icons/emailIcon.svg';
import webIcon from '../../icons/webIcon.svg';
import GoogleBtn from '../../icons/Brands/googlePlayBtn.png';
import AppleBtn from '../../icons/Brands/AppStoreBtn.png';
import instagramIcon from '../../icons/Brands/instagramIcon.svg';
import linkedInIcon from '../../icons/Brands/linkedInIcon.svg';
import twitterIcon from '../../icons/Brands/twitterIcon.svg';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__upper'>
				<p className='footer__upper--text'>
					Get the Hitch App for the matchmaking experience
				</p>
				<div className='footer__upper--buttons'>
					<a href='#' className='footer__upper--applink'>
						<img src={GoogleBtn} alt='google btn' />
					</a>
					<a href='#' className='footer__upper--applink'>
						<img src={AppleBtn} alt='google btn' />
					</a>
				</div>
			</div>

			<div className='footer__mid'>
				<ul className='footer__mid--list'>
					<li className='footer__mid--listhead'>About</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							About Hitch
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Our team
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							careers
						</Link>
					</li>
				</ul>
				<ul className='footer__mid--list'>
					<li className='footer__mid--listhead'>Events</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Featured Events
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Bookmarks
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Visited Events
						</Link>
					</li>
				</ul>
				<ul className='footer__mid--list'>
					<li className='footer__mid--listhead'>Discover</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Music
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							webinars
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Stand up
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink' href='#'>
							Art and culture
						</Link>
					</li>
				</ul>
				<ul className='footer__mid--list'>
					<li className='footer__mid--listhead'>Create</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Pricing
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							How to create events
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Create New Events
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Created Events
						</Link>
					</li>
				</ul>
				<ul className='footer__mid--list'>
					<li className='footer__mid--listhead'>Account</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Login Help
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Privacy Setting
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Security Setting
						</Link>
					</li>
					<li className='footer__mid--listitem'>
						<Link to='/' className='footer__mid--listlink'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer__lower'>
				<div className='footer__lower--left'>
					<span className='footer__lower--contact'>Contact Us : </span>
					<span className='footer__lower--icons'>
						<a href='#' className='footer__lower--iconlink'>
							<img src={twitterIcon} className=' footer__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='footer__lower--iconlink'>
							<img src={linkedInIcon} className=' footer__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='footer__lower--iconlink'>
							<img src={emailIcon} className=' footer__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='footer__lower--iconlink'>
							<img src={webIcon} className=' footer__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='footer__lower--iconlink'>
							<img src={instagramIcon} className=' footer__lower--icon' alt='twitter' />
						</a>
					</span>
				</div>

				<Link to='terms' className='footer__lower--terms'>
					Our Terms, Conditions and Privacy Policies
				</Link>
			</div>
		</div>
	);
};

export default Footer;
