// import { useRef } from "react";
import {
	EmailShareButton,
	FacebookShareButton,
	LineShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	PocketShareButton,
	RedditShareButton,
	TelegramShareButton,
	TumblrShareButton,
	TwitterShareButton,
	ViberShareButton,
	WhatsappShareButton,
	EmailIcon,
	FacebookIcon,
	LineIcon,
	LinkedinIcon,
	PinterestIcon,
	PocketIcon,
	RedditIcon,
	TelegramIcon,
	TumblrIcon,
	TwitterIcon,
	ViberIcon,
	WhatsappIcon
} from 'react-share';

const ShareButtons = (props) => {
	// const shareButtons = useRef(null);
	const sharedURL = `${process.env.REACT_APP_HOME_PAGE}/event/${props.event.id}`;
	const sharedTitle = `${props.event.title} on Mezami`;
	const sharedBody = `Checkout this event on Mezami, event hosting platform`;

	// const toggleDisplay = (value) => {
	// 	if(shareButtons?.current) {
	// 		if(value) shareButtons.current.classList.add('show')
	// 		else shareButtons.current.classList.remove('show')
	// 	}
	// }
	// ref={shareButtons}

	return (
		<div className='shareButtons'>
			<EmailShareButton url={sharedURL} subject={sharedTitle} body={sharedBody}>
				<EmailIcon size={32} round />
			</EmailShareButton>
			<FacebookShareButton url={sharedURL} quote={sharedTitle}>
				<FacebookIcon size={32} round />
			</FacebookShareButton>
			<LineShareButton url={sharedURL} title={sharedTitle}>
				<LineIcon size={32} round />
			</LineShareButton>
			<LinkedinShareButton
				url={sharedURL}
				title={sharedTitle}
				summary={sharedBody}
				source={sharedURL}
			>
				<LinkedinIcon size={32} round />
			</LinkedinShareButton>
			<PinterestShareButton
				url={sharedURL}
				description={sharedTitle}
				media={props.event.image}
			>
				<PinterestIcon size={32} round />
			</PinterestShareButton>
			<PocketShareButton url={sharedURL} title={sharedTitle}>
				<PocketIcon size={32} round />
			</PocketShareButton>
			<RedditShareButton url={sharedURL}>
				<RedditIcon size={32} round />
			</RedditShareButton>
			<TelegramShareButton url={sharedURL} title={sharedTitle}>
				<TelegramIcon size={32} round />
			</TelegramShareButton>
			<TumblrShareButton url={sharedURL} title={sharedTitle}>
				<TumblrIcon size={32} round />
			</TumblrShareButton>
			<TwitterShareButton url={sharedURL} title={sharedTitle}>
				<TwitterIcon size={32} round />
			</TwitterShareButton>
			<ViberShareButton url={sharedURL} title={sharedTitle}>
				<ViberIcon size={32} round />
			</ViberShareButton>
			<WhatsappShareButton url={sharedURL} title={sharedTitle} separator=' || '>
				<WhatsappIcon size={32} round />
			</WhatsappShareButton>
		</div>
	);
};

export default ShareButtons;
