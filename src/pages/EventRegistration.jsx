import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import axios from 'axios';

import { registerForFreeEvent } from '../redux/actions/eventActions';
// import ConfirmationPrompt from '../components/Common/ConfirmationPrompt';
import Loading from '../components/Common/Loading';
import Page404 from './Page404';
import downArrow from '../icons/downArrow.svg';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script');
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

const __DEV__ = document.domain === 'localhost';

const EventRegistration = (props) => {
	const { eventID } = props.match.params;

	const initialEntry = [
		{
			name: props.profile?.name ?? '',
			email: props.profile?.email ?? '',
			phone: props.profile?.phone ?? '',
			gender: '',
			id: nanoid()
		}
	];

	const [event, setEvent] = useState(null);
	const [entries, setEntries] = useState(initialEntry);
	const [httpStatusCode, setHttpStatusCode] = useState(null);
	// const [confirmationPromptActive, setConfirmationPromptActive] = useState(false);
	// const [paymentSuccess, setPaymentSuccess] = useState(false);

	const addEntry = () => {
		setEntries((currentEntries) => [
			...currentEntries,
			{
				name: '',
				email: '',
				phone: '',
				gender: '',
				id: nanoid()
			}
		]);
	};

	const removeEntry = (id) => {
		setEntries((currentEntries) => {
			const newEntries = currentEntries.filter((entry) => entry.id !== id);
			return newEntries;
		});
	};

	const handleChange = (e, id) => {
		setEntries((currentEntries) => {
			let newEntries = [...currentEntries];
			let item = newEntries.find((p) => p.id === id);
			let itemIndex = newEntries.indexOf(item);
			item[e.target.name] = e.target.value;
			newEntries[itemIndex] = item;

			return [...newEntries];
		});
	};

	const getStringifiedArray = (type) => {
		const arr = [];
		for (let i = 0; i < entries.length; ++i) {
			arr.push(entries[i][type]);
		}
		console.log(arr);
		return JSON.stringify(arr);
	};

	const registerForEvent = async (formData) => {
		try {
			const { data } = await axios.post(`/events/${eventID}/register/`, formData, {
				headers: {
					Authorization: `Token ${props.token}`
				}
			});
			return data;
		} catch (error) {
			console.error(error);
			props.history.push(`/event/${eventID}`);
		}
	};

	const handleSubmitFree = async (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('attendee_names', getStringifiedArray('name'));
		formData.append('attendee_emails', getStringifiedArray('email'));
		formData.append('attendee_phones', getStringifiedArray('phone'));
		formData.append('attendee_genders', getStringifiedArray('gender'));
		formData.append('num_of_participants', entries.length);

		const data = await registerForEvent(formData);
		props.history.push(`/event/${eventID}/ticket`, { ticket: data.ticket });

		// props.registerForFreeEvent(eventID, formData, () => {
		// 	props.history.push(`/event/${eventID}/register/finish`);
		// });

		// setState is asynchronous, have to refactor
		// setData(temp);
		// setConfirmationPromptActive(true);
		// sendReq();
	};

	const handleSubmitPaid = (e) => {
		e.preventDefault();

		let formData = new FormData();
		formData.append('attendee_names', getStringifiedArray('name'));
		formData.append('attendee_emails', getStringifiedArray('email'));
		formData.append('attendee_phones', getStringifiedArray('phone'));
		formData.append('attendee_genders', getStringifiedArray('gender'));
		formData.append('num_of_participants', entries.length);

		console.log('paid event');
		displayRazorpay(formData);
	};

	const verifyPayment = async (paymentData) => {
		try {
			const { data } = await axios.post(
				`/events/${eventID}/verify-payment/`,
				paymentData,
				{
					headers: {
						Authorization: `Token ${props.token}`,
						'Content-Type': 'text/plain'
					}
				}
			);
			console.log(data);
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	async function displayRazorpay(formData) {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?');
			return;
		}

		const data = await registerForEvent(formData);

		const options = {
			key: __DEV__ ? 'rzp_test_5T0xlGSvA6jCbb' : 'PRODUCTION_KEY',
			currency: 'INR',
			amount: data.amount.toString(),
			order_id: data.razorpay_order_id,
			name: 'Registration fee',
			description: 'Entry fee for Hitch event',
			image: 'http://localhost:3000/temp/image.jpg',
			handler: async function (response) {
				console.log(response);
				// console.log(response.razorpay_payment_id);
				// console.log(response.razorpay_order_id);
				// console.log(response.razorpay_signature);

				const paymentVerification = await verifyPayment(response);

				if (paymentVerification) {
					if (paymentVerification.data.success) {
						props.history.push(`/event/${eventID}/ticket`, { ticket: data.ticket });
					}
				} else {
					alert('payment failed');
					props.history.push(`/event/${eventID}/`);
				}
			},
			prefill: {
				name: props.profile.name,
				email: props.profile.phone,
				phone_number: props.profile.phone
			}
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	}

	const getEvent = async (eventID) => {
		try {
			const res = await axios.get(`/events/${eventID}/`);
			setEvent(res.data);
		} catch (error) {
			setHttpStatusCode(error.response.status);
			// errorHandler(error);
		}
	};

	useEffect(() => {
		if (props.location.event) setEvent(props.location.event);
		else getEvent(eventID);
	}, [eventID, props.location.event]);

	if (httpStatusCode === 404) {
		return <Page404 />;
	}

	return (
		<div className='eventRegistration'>
			{!event ? (
				<Loading />
			) : (
				<section>
					<div className='eventRegistration__header'>
						<h3>Registering for</h3>
						<h2>{event.title}</h2>
					</div>
					<form
						className='eventRegistration__form'
						onSubmit={!event.ticket_price ? handleSubmitFree : handleSubmitPaid}
					>
						<div className='eventRegistration__form__header'>
							Select number of tickets
						</div>
						<div className='eventRegistration__form__entries'>
							{entries.map((entry, index) => (
								<div key={index} className='entry'>
									<div className='entry-fields'>
										<input
											required
											type='text'
											name='name'
											value={entry.name}
											placeholder='Name'
											onChange={(e) => {
												handleChange(e, entry.id);
											}}
										/>
										<input
											required
											type='email'
											name='email'
											value={entry.email}
											placeholder='Email'
											onChange={(e) => {
												handleChange(e, entry.id);
											}}
										/>
										<input
											required
											title='+Country code and mobile'
											type='tel'
											pattern='[+]{1}[0-9]{10,20}'
											name='phone'
											value={entry.phone}
											placeholder='Mobile'
											onChange={(e) => {
												handleChange(e, entry.id);
											}}
										/>
										<select
											required
											name='gender'
											value={entry.gender}
											onChange={(e) => {
												handleChange(e, entry.id);
											}}
											className='gender-dropdown'
											style={{ backgroundImage: `url(${downArrow})` }}
										>
											<option value='' disabled>
												Gender
											</option>
											<option value='M'>M</option>
											<option value='F'>F</option>
										</select>
									</div>
									<button
										type='button'
										className='custom-button cancel'
										onClick={() => {
											removeEntry(entry.id);
										}}
									>
										Remove
									</button>
								</div>
							))}
							<button type='button' onClick={addEntry} className='addParticipantBtn'>
								Add Another Participant
							</button>
						</div>

						{!event.ticket_price ? (
							<div className='eventRegistration__bottom-buttons'>
								<button type='submit' className='registerEventButton'>
									Register For this Event
								</button>
								<span className='totalPrice'>FREE</span>
							</div>
						) : (
							<div className='eventRegistration__bottom-buttons'>
								<button type='submit' className='registerEventButton'>
									Register For this Event
								</button>
								<span className='totalPrice'>{event.ticket_price * entries.length}</span>
							</div>
						)}
					</form>

					{/* <ConfirmationPrompt
						active={confirmationPromptActive}
						closePrompt={() => {
							setConfirmationPromptActive(false);
						}}
						confirm={() => {
							props.registerForEvent(eventID, data);
						}}
					/> */}
				</section>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.profileState.profile,
	token: state.authState.token
});

export default connect(mapStateToProps, { registerForFreeEvent })(EventRegistration);
