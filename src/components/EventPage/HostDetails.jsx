import HostCard from './HostCard';
import host1 from '../../icons/Host.png';

const hosts = [
	{
		imgsrc: host1,
		role: 'Artist',
		name: 'Coldplay',
		category: 'Rock Band'
	}
];

const HostDetails = (props) => {
	return (
		<section className='speakers'>
			<p className='header'>HOST AND SPEAKERS</p>

			<div className='cards'>
				{hosts.map((host, index) => (
					<HostCard key={index} className='card' host={host} />
				))}
			</div>
		</section>
	);
};

export default HostDetails;
