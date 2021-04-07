import { Link } from 'react-router-dom';

import emailIcon from '../../icons/emailIcon.svg';
import webIcon from '../../icons/webIcon.svg';
import GoogleBtn from '../../icons/Brands/googlePlayBtn.png';
import AppleBtn from '../../icons/Brands/AppStoreBtn.png';
import instagramIcon from '../../icons/Brands/instagramIcon.svg';
import linkedInIcon from '../../icons/Brands/linkedInIcon.svg';
import twitterIcon from '../../icons/Brands/twitterIcon.svg';

const MainFooter = () => {
	return (
		<footer className='mainFooter'>
			<div className='mainFooter__upper'>
				<p className='mainFooter__upper--text'>
					Get the Hitch App for the matchmaking experience
				</p>
				<div className='mainFooter__upper--buttons'>
					<a href='#' className='mainFooter__upper--applink'>
						<img src={GoogleBtn} alt='google btn' />
					</a>
					<a href='#' className='mainFooter__upper--applink'>
						<img src={AppleBtn} alt='google btn' />
					</a>
				</div>
			</div>

			<div className='mainFooter__mid'>
				<ul className='mainFooter__mid--list'>
					<li className='mainFooter__mid--listhead'>About</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							About Hitch
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Our team
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							careers
						</Link>
					</li>
				</ul>
				<ul className='mainFooter__mid--list'>
					<li className='mainFooter__mid--listhead'>Events</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Featured Events
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Bookmarks
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Visited Events
						</Link>
					</li>
				</ul>
				<ul className='mainFooter__mid--list'>
					<li className='mainFooter__mid--listhead'>Discover</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Music
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							webinars
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Stand up
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink' href='#'>
							Art and culture
						</Link>
					</li>
				</ul>
				<ul className='mainFooter__mid--list'>
					<li className='mainFooter__mid--listhead'>Create</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Pricing
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							How to create events
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Create New Events
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Created Events
						</Link>
					</li>
				</ul>
				<ul className='mainFooter__mid--list'>
					<li className='mainFooter__mid--listhead'>Account</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Login Help
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Privacy Setting
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Security Setting
						</Link>
					</li>
					<li className='mainFooter__mid--listitem'>
						<Link to='/' className='mainFooter__mid--listlink'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
			<div className='mainFooter__lower'>
				<div className='mainFooter__lower--left'>
					<span className='mainFooter__lower--contact'>Contact Us : </span>
					<span className='mainFooter__lower--icons'>
						<a href='#' className='mainFooter__lower--iconlink'>
							<img src={twitterIcon} className=' mainFooter__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='mainFooter__lower--iconlink'>
							<img
								src={linkedInIcon}
								className=' mainFooter__lower--icon'
								alt='twitter'
							/>
						</a>
						<a href='#' className='mainFooter__lower--iconlink'>
							<img src={emailIcon} className=' mainFooter__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='mainFooter__lower--iconlink'>
							<img src={webIcon} className=' mainFooter__lower--icon' alt='twitter' />
						</a>
						<a href='#' className='mainFooter__lower--iconlink'>
							<img
								src={instagramIcon}
								className=' mainFooter__lower--icon'
								alt='twitter'
							/>
						</a>
					</span>
				</div>

				<Link to='terms' className='mainFooter__lower--terms'>
					Our Terms, Conditions and Privacy Policies
				</Link>
			</div>
		</footer>
	);
};

export default MainFooter;
