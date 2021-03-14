import { useState } from 'react';
import upArrow from '../../icons/upArrow.svg';
import line from '../../icons/line.svg';
import circle from '../../icons/timelineCircle.svg';
import circle2 from '../../icons/timelineCircle2.svg';

const Timeline = () => {
	const [showButton, setShowButton] = useState(false);

	const clickBtn = () => {
		setShowButton(!showButton);
	};
	return (
		<section className='timelineOld'>
			<div className='timelineOld__header'>
				<span className='timelineOld__header--text'>EVENT TIMELINE</span>
				<button onClick={clickBtn} className='timelineOld__header--btn'>
					<img className='timelineOld__header--btnimg' src={upArrow} alt='btn' />
				</button>
			</div>
			{showButton ? (
				<div className='timelineOld__body'>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle2} alt='circle' />
						<span className='timelineOld__body--time'>07:00AM</span>
						<span className='timelineOld__body--event'>COMMENCEMENT OF CONCERT</span>
					</div>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle} alt='circle' />
						<span className='timelineOld__body--time'>07:30PM</span>
						<span className='timelineOld__body--event'>
							Performace from 1st Album - “Yellow”
						</span>
					</div>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle} alt='circle' />
						<span className='timelineOld__body--time'>08:30PM</span>
						<span className='timelineOld__body--event'>
							Performance from 2nd Album - “X&Y”
						</span>
					</div>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle} alt='circle' />
						<span className='timelineOld__body--time'>10:30PM</span>
						<span className='timelineOld__body--event'>Closing Act</span>
					</div>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle2} alt='circle' />
						<span className='timelineOld__body--time'>11:00PM</span>
						<span className='timelineOld__body--event'>END OF CONCERT</span>
					</div>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle} alt='circle' />
						<span className='timelineOld__body--time'>12:00AM</span>
						<span className='timelineOld__body--event'>VIP Meet and greet</span>
					</div>
				</div>
			) : (
				<div className='timelineOld__body'>
					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle2} alt='circle' />
						<span className='timelineOld__body--time'>07:00AM</span>
						<span className='timelineOld__body--event'>COMMENCEMENT OF CONCERT</span>
					</div>

					<div className='timelineOld__body--block'>
						<img className='timelineOld__body--circleicon' src={circle2} alt='circle' />
						<span className='timelineOld__body--time'>11:00PM</span>
						<span className='timelineOld__body--event'>END OF CONCERT</span>
					</div>
				</div>
			)}
		</section>
	);
};

export default Timeline;
