const OrganizersMessage = (props) => {
	return (
		<section className='organizersMessage'>
			<h2 className='organizersMessage__header'>FROM THE ORGANIZERS</h2>
			<p className='organizersMessage__message'>
				{props.organizersMessage ?? 'No message from the organizers'}
			</p>
		</section>
	);
};

export default OrganizersMessage;
