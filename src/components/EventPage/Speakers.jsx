import HostCard from './HostCard';
import host1 from '../../icons/Host.png';

const hostdetails = {
	imgsrc: host1,
	role: 'Artist',
	name: 'Coldplay',
	category: 'Rock Band'
};

const Speakers = (props) => {
	return (
		<section className='speakers'>
			<p className='header'>HOST AND SPEAKERS</p>

			<div className='cards'>
				<HostCard className='card' hostdetails={hostdetails} />
			</div>
		</section>
	);
};

export default Speakers;
