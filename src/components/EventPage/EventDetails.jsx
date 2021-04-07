import { useState } from 'react';
import Moment from 'moment';

import ShareButtons from './ShareButtons';

const EventDetails = (props) => {
	const [showShareButtons, setShowShareButtons] = useState(false);

	return (
		<section className='eventdetails'>
			<div className='eventdetails__schedule'>
				<h3 className='eventdetails__schedule--head'>SCHEDULE</h3>

				<div className='eventdetails__timing'>
					<p className='eventdetails__timing--text'>START TIME</p>
					<p className='eventdetails__timing--time'>
						{Moment(props.event?.scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
					</p>
				</div>

				<div className='eventdetails__duration'>
					<p className='eventdetails__duration--text'>DURATION</p>
					<p className='eventdetails__duration--length'>
						{(props.event?.duration_days && `${props.event?.duration_days} days`) ||
							(props.event?.duration && `${props.event?.duration} hours`)}
					</p>
				</div>
			</div>

			<div className='eventdetails__price'>
				<h3 className='eventdetails__price--head'>PRICE</h3>
				{props.event?.ticket_price === 0 ? (
					<>
						<p className='eventdetails__price--body'>THIS EVENT IS</p>
						<p className='eventdetails__price--cost'>FREE</p>
					</>
				) : (
					<p className='eventdetails__price--cost'>₹ {props.event?.ticket_price}</p>
				)}
			</div>

			<div className='eventdetails__visit'>
				<h3 className='eventdetails__visit--head'>VISIT ORGANISERS</h3>
				{props.organizersWebsite ? (
					<a href='#' target='_blank' className='eventdetails__visit--link'>
						{props.organizersWebsite}
					</a>
				) : (
					<p>No website provided</p>
				)}

				<div className='eventdetails__visit--buttons'>
					<button
						className='eventdetails__visit--sharebtn'
						onClick={() => {
							setShowShareButtons((prevState) => !prevState);
						}}
					>
						Share
						<i className='fas fa-share-alt'></i>
					</button>
					<button className='eventdetails__visit--copybtn'>
						Copy
						<i className='far fa-copy'></i>
						<p className='eventdetails__visit--copybtn--tooltip'>Copy to clipboard</p>
					</button>
					{showShareButtons ? <ShareButtons event={props.event} /> : null}
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
