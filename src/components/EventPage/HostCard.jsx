import { Link } from 'react-router-dom';

const HostCard = (props) => {
	return (
		<div className='hostCard'>
			<Link
				to={{
					pathname: `/profile/${props.profile?.id}`,
					state: { profile: props.profile }
				}}
			>
				<div>
					<img
						src={props.profile?.image}
						alt={`${props.profile?.name}'s profile picture`}
						className='hostCard__pic'
					/>
					{/* <p className="hostCard__role"></p> */}
					<h6 className='hostCard__name'>{props.profile?.name}</h6>
				</div>
			</Link>
			<p className='hostCard__category'>{props.profile?.role}</p>
			<p className='hostCard__about'>{props.profile?.about}</p>
		</div>
	);
};

export default HostCard;
