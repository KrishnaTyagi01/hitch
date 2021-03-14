
import axios from 'axios';

import { errorHandler } from './errorHandler';
import { GET_EVENTS, GET_EVENT, GET_PROFILE, INC_COUNT, CLEAR_STATE } from '../types';

export const getEvents = () => async (dispatch) => {
	try {
		const response = await axios.get('/events/');
		dispatch({
			type: GET_EVENTS,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const getEvent = (eventID) => async (dispatch) => {
	try {
		const response = await axios.get(`/events/${eventID}/`);
		dispatch({
			type: GET_EVENT,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const getProfile = (profileID) => async (dispatch) => {
	try {
		const response = await axios.get(`/profiles/${profileID}/`);
		dispatch({
			type: GET_PROFILE,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const clearState = () => async (dispatch) => {
	try {
		dispatch({
			type: CLEAR_STATE,
			payload: 'cleared redux state'
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const incCount = () => async (dispatch) => {
	try {
		dispatch({
			type: INC_COUNT,
			payload: 1
		});
	} catch (error) {
		errorHandler(error);
	}
	return 'done';
};
