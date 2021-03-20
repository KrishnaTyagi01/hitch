import HostCard from './HostCard';

const HostDetails = (props) => {
	return (
		<section className='speakers'>
			<p className='header'>HOST AND SPEAKERS</p>
			{props.profileError ? (
				<div className='page-text'>Unable to load</div>
			) : (
				<div className='cards'>
					<HostCard className='card' profile={props.profile} />
				</div>
			)}
		</section>
	);
};

export default HostDetails;
