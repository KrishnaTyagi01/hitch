import axios from 'axios';

import { errorHandler } from './errorHandler';
import {
	CREATE_EVENT,
	EDIT_EVENT,
	REGISTER_FOR_EVENT,
	VERIFY_PAYMENT_FOR_EVENT
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

export const registerForEvent = (eventID, details) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			`/events/${eventID}/register/`,
			details,
			tokenConfig(getState)
		);
		dispatch({
			type: REGISTER_FOR_EVENT,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const verifyPaymentForEvent = (eventID, details) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			`/events/${eventID}/verify-payment//`,
			details,
			tokenConfig(getState)
		);
		dispatch({
			type: VERIFY_PAYMENT_FOR_EVENT,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};
