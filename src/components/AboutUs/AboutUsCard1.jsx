import { Link } from 'react-router-dom';

import image1 from '../../icons/about Hitch/matchmaking.png';
import image2 from '../../icons/about Hitch/zoom 1.png';
import image3 from '../../icons/about Hitch/eventhosting.png';
import googleplay from '../../icons/Brands/googlePlayBtn.png';
import appstore from '../../icons/Brands/AppStoreBtn.png';

const AboutUsCard = (props) => {
	function last_row() {
		if (props.card === '1') {
			return (
				<div className='AboutUsCard__lastRow--card1'>
					<img src={googleplay} alt='google playstore' />
					<img src={appstore} alt='apple appstore' />
				</div>
			);
		} else if (props.card === '2') {
			return (
				<Link to='/events' className='AboutUsCard__lastRow--card2'>
					{/* <ScrollToTop /> */}
					Discover Events
				</Link>
			);
		} else {
			return (
				<Link to='/host-event' className='AboutUsCard__lastRow--card3'>
					{/* <ScrollToTop /> */}
					HOST
				</Link>
			);
		}
	}

	function image_item() {
		switch (props.card) {
			case '1':
				return <img src={image1} alt='handshake' />;
			case '2':
				return <img src={image2} alt='search' />;
			case '3':
				return <img src={image3} alt='announcement' />;
			default:
				return null;
		}
	}

	return (
		<div className='AboutUsCard'>
			<div className='AboutUsCard--heading'>Matchmaking</div>
			<div className='AboutUsCard--image'>{image_item()}</div>
			<div className='AboutUsCard--text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa, repellat
				animi itaque illum dolor magnam numquam nostrum obcaecati sapiente commodi dicta
				beatae blanditiis provident, soluta voluptas aliquam quos fuga?
			</div>
			{last_row()}
		</div>
	);
};

export default AboutUsCard;
