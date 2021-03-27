import axios from 'axios';

import reduxErrorHandler from './reduxErrorHandler';
import {
	GET_EVENTS,
	GET_EVENT,
	GET_PROFILE,
	SEARCH_EVENTS,
	INC_COUNT,
	CLEAR_STATE
} from '../types';

export const getEvents = (next) => async (dispatch) => {
	try {
		const response = await axios.get('/events/');
		dispatch({
			type: GET_EVENTS,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const getEvent = (eventID, next) => async (dispatch) => {
	try {
		const response = await axios.get(`/events/${eventID}/`);
		dispatch({
			type: GET_EVENT,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const getProfile = (profileID, next) => async (dispatch) => {
	try {
		const response = await axios.get(`/profiles/${profileID}/`);
		dispatch({
			type: GET_PROFILE,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const searchEvents = (formData) => async (dispatch, getState) => {
	try {
		const response = await axios.post('/events/search/', formData, tokenConfig(getState));
		dispatch({
			type: SEARCH_EVENTS,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error, dispatch);
	}
};

export const clearState = () => async (dispatch) => {
	try {
		dispatch({
			type: CLEAR_STATE,
			payload: 'cleared redux state'
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const incCount = () => async (dispatch) => {
	try {
		dispatch({
			type: INC_COUNT,
			payload: 1
		});
	} catch (error) {
		reduxErrorHandler(error);
	}
	return 'done';
};
