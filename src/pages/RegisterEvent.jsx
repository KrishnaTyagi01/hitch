import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import axios from 'axios';
import { connect } from 'react-redux';

const RegisterEvent = (props) => {
	const [tickets, setTickets] = useState([]);
	const [currTicket, setCurrTicket] = useState({
		name: '',
		email: '',
		phone: '',
		gender: ''
	});

	const addCurrParticpant = () => {
		setTickets([...tickets, currTicket]);
		setCurrTicket({
			name: '',
			email: '',
			phone: '',
			gender: ''
		});
	};

	useEffect(() => {
		// console.log(tickets);
		// console.log(props.location.state.event.id);
		console.log(props.token);
	}, []);

	const Participants = tickets.map((ticket, idx) => {
		return (
			<div className='addTicket'>
				<div>{idx + 1}</div>
				<input value={ticket.name} placeholder='Name' type='text' />
				<input value={ticket.email} placeholder='Email' type='text' />
				<input value={ticket.phone} placeholder='Phone' type='text' />
				<input value={ticket.gender} placeholder='gender' type='text' />
				<div>{}</div>
			</div>
		);
	});

	const sendReq = async () => {
		const res = await axios({
			url: `http://167.71.237.202/events/${props.location.state.event.id}/register/`,
			method: 'POST',
			headers: {
				Authorization: `Token ${props.token}`
			},
			data: {
				participants: tickets.length,
				details: [...tickets, currTicket]
			}
		});

		console.log(res);
	};

	return (
		<div className='registerEvent'>
			<div className='registerEvent_body'>
				<div className='header'>Select number of tickets</div>
				<div className='tickets'>
					{Participants}
					<div className='addTicket'>
						<div>{tickets.length + 1}</div>
						<input
							value={currTicket.name}
							onChange={(e) => setCurrTicket({ ...currTicket, name: e.target.value })}
							placeholder='Name'
							type='text'
						/>
						<input
							value={currTicket.email}
							onChange={(e) => setCurrTicket({ ...currTicket, email: e.target.value })}
							placeholder='Email'
							type='text'
						/>
						<input
							value={currTicket.phone}
							onChange={(e) => setCurrTicket({ ...currTicket, phone: e.target.value })}
							placeholder='Phone'
							type='text'
						/>
						<input
							value={currTicket.gender}
							onChange={(e) => setCurrTicket({ ...currTicket, gender: e.target.value })}
							placeholder='gender'
							type='text'
						/>
						<div>{}</div>
					</div>
					<button type='button' onClick={addCurrParticpant} className='addParticipantBtn'>
						Add Another Participant
					</button>
				</div>
				<button type='button' onClick={sendReq} className='registerEventButton'>
					Register For this Event
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		token: state.authState.token
	};
};

export default connect(mapStateToProps)(RegisterEvent);
