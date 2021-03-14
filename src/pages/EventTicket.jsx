import { connect } from 'react-redux';

import Loading from '../components/Common/Loading';

const Confirmed = (props) => {
	const { id } = props.location.state.ticket;
	console.log(props);

	return (
		<div className='confirmation'>
			{!props.location.state.ticket ? (
				<Loading />
			) : (
				<h3 className='confirmation__text'>{id}</h3>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	registrationStatus: state.eventState.registrationStatus
});

export default connect(mapStateToProps, {})(Confirmed);
