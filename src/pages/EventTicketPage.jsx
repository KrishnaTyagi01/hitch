import { connect } from 'react-redux';

import Loading from '../components/Common/Loading';

const Confirmed = (props) => {
	const { id } = props.location.state.ticket;
	console.log(props);

	return (
		<div className='event-ticket-page'>
			{!props.location.state.ticket ? <Loading /> : <h3 className='ticket-id'>{id}</h3>}
		</div>
	);
};

const mapStateToProps = (state) => ({
	registrationStatus: state.eventState.registrationStatus
});

export default connect(mapStateToProps, {})(Confirmed);
