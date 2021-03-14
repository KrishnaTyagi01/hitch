import axios from 'axios';

import { errorHandler } from './errorHandler';
import { tokenConfig } from './authActions';
import {
	CREATE_EVENT,
	EDIT_EVENT,
	REGISTER_FOR_EVENT,
	PAYMENT_SUCCESS,
	PAYMENT_FAILURE
} from '../types';

export const createEvent = (event) => async (dispatch, getState) => {
	try {
		const response = await axios.post('/events/', event, tokenConfig(getState));
		dispatch({
			type: CREATE_EVENT,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const editEvent = (eventID) => async (dispatch, getState) => {
	try {
		const response = await axios.post(`/events/${eventID}/`, tokenConfig(getState));
		dispatch({
			type: EDIT_EVENT,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const registerForFreeEvent = (eventID, data, next) => async (
	dispatch,
	getState
) => {
	try {
		const response = await axios.post(
			`/events/${eventID}/register/`,
			data,
			tokenConfig(getState)
		);
		dispatch({
			type: REGISTER_FOR_EVENT,
			payload: response.data
		});
		next();
	} catch (error) {
		errorHandler(error);
	}
};

export const registerForPaidEvent = (eventID, data, next) => async (
	dispatch,
	getState
) => {
	try {
		const response = await axios.post(
			`/events/${eventID}/register/`,
			data,
			tokenConfig(getState)
		);
		dispatch({
			type: REGISTER_FOR_EVENT,
			payload: response.data
		});
		next();
	} catch (error) {
		errorHandler(error);
	}
};

export const verifyPayment = (eventID, details) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			`/events/${eventID}/verify-payment/`,
			details,
			tokenConfig(getState)
		);
		dispatch({
			type: PAYMENT_SUCCESS,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
		// dispatch({
		// 	type: PAYMENT_FAILURE,
		// 	payload: response.data
		// });
	}
};
