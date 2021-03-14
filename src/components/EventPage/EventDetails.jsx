import Moment from 'moment';
import copyIcon from '../../icons/copyIcon.svg';
import shareIcon from '../../icons/shareIcon.svg';

const EventDetails = (props) => {
	return (
		<section className='eventdetails'>
			<div className='eventdetails__schedule'>
				<h3 className='eventdetails__schedule--head'>SCHEDULE</h3>

				<div className='eventdetails__timing'>
					<span className='eventdetails__timing--text'>START TIME</span>
					<p className='eventdetails__timing--time'>
						{Moment(props.event?.scheduled_time, ['hh:mm:ss']).format('hh:mm A')}
					</p>
				</div>

				<div className='eventdetails__duration'>
					<span className='eventdetails__duration--text'>DURATION DAYS</span>
					<p className='eventdetails__duration--length'>{props.event?.duration_days}</p>
				</div>
			</div>

			<div className='eventdetails__price'>
				<h3 className='eventdetails__price--head'>PRICE</h3>
				{props.event?.ticket_price === 0 ? (
					<>
						<span className='eventdetails__price--body'>THIS EVENT IS</span>
						<p className='eventdetails__price--cost'>FREE</p>
					</>
				) : (
					<p className='eventdetails__price--cost'>₹ {props.event?.ticket_price}</p>
				)}
			</div>

			<div className='eventdetails__visit'>
				<h3 className='eventdetails__visit--head'>VISIT ORGANISERS</h3>

				<a href='#' target='_blank' className='eventdetails__visit--link'>
					{window.location.href}
				</a>

				<div className='eventdetails__visit--buttons'>
					<button className='eventdetails__visit--sharebtn'>
						Share
						<img
							className='eventdetails__visit--shareicon'
							src={shareIcon}
							alt='share icon'
						/>
					</button>
					<button className='eventdetails__visit--copybtn'>
						Copy
						<img
							className='eventdetails__visit--copybtn--copyicon'
							src={copyIcon}
							alt='copy icon'
						/>
						<span className='eventdetails__visit--copybtn--tooltip'>
							Copy to clipboard
						</span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
