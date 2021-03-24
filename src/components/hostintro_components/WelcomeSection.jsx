import image1 from '../../icons/hostIntro/image1.svg'
import yellowDotIcon from '../../icons/profile/yellowDotIcon.svg';
import { Link, Redirect } from 'react-router-dom';

const WelcomeSection = () => {

	return (
		<div className="welcome">
			<div className="welcome__left">
				<h2 className="welcome__left--head1">Welcome to H!tch <img src={yellowDotIcon} alt="icon" className="welcome__left--icon" /> </h2>
				{/* <h2 className="welcome__left--head2">H!tch<img src={yellowDotIcon} alt="icon" className="welcome__left--icon" /> HOST mode</h2> */}

				<p className="welcome__left--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut risus tortor vitae sit porta molestie consequat facilisis. </p>
				<Link to="/host-event"><button className="welcome__left--btn">HOST</button></Link>
			</div>
			<div className="welcome__right">
				<img src={image1} alt="image" className="welcome__right--img" />
			</div>
		</div>
	)
}

export default WelcomeSection;