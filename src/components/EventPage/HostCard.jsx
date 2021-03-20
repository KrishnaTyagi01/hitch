const HostCard = (props) => {
	return (
		<div className='hostcard'>
			<div className='hostcard__wrapper'>
				<img src={props.profile?.image} alt='host pic' className='hostcard__pic' />
				{/* <p className="hostcard__role"></p> */}
				<div className='hostcard__host'>
					<h3 className='hostcard__name'>{props.profile?.name}</h3>
					{/* <span className="hostcard__category"></span> */}
				</div>
				<p className='hostcard__text'>{props.profile?.about}</p>
			</div>
		</div>
	);
};

export default HostCard;
