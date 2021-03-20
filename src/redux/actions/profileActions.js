import axios from 'axios';

import reduxErrorHandler from './reduxErrorHandler';
import { tokenConfig } from './authActions';
import {
	GET_SELF_PROFILE,
	EDIT_PROFILE,
	GET_HOSTED_EVENTS,
	GET_ATTENDED_EVENTS,
	GET_UPCOMING_EVENTS,
	GET_WISHLIST,
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST,
	DELETE_WISHLIST
	// ADD_TO_CALENDER,
	// REMOVE_FROM_CALENDER
} from '../types';

export const editProfileConfig = (getState) => {
	const config = { headers: {} };
	const token = getState().authState.token;
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
		config.headers['Content-Type'] = 'multipart/form-data';
	}
	return config;
};

export const getSelfProfile = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/self/', tokenConfig(getState));
		dispatch({
			type: GET_SELF_PROFILE,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const editProfile = (id, data, next) => async (dispatch, getState) => {
	try {
		const response = await axios.put(
			`/profiles/${id}/`,
			data,
			editProfileConfig(getState)
		);
		dispatch({
			type: EDIT_PROFILE,
			payload: response.data
		});
		next();
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const getHostedEvents = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/hosted_events/', tokenConfig(getState));
		dispatch({
			type: GET_HOSTED_EVENTS,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const getAttendedEvents = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/events_attended/', tokenConfig(getState));
		dispatch({
			type: GET_ATTENDED_EVENTS,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const getUpcomingEvents = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/upcoming_events/', tokenConfig(getState));
		dispatch({
			type: GET_UPCOMING_EVENTS,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const getWishlist = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/wishlist/', tokenConfig(getState));
		dispatch({
			type: GET_WISHLIST,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const addToWishlist = (eventID) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			'/profiles/wishlist/',
			{ add: eventID },
			tokenConfig(getState)
		);
		dispatch({
			type: ADD_TO_WISHLIST,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const removeFromWishlist = (eventID) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			'/profiles/wishlist/',
			{ remove: eventID },
			tokenConfig(getState)
		);
		dispatch({
			type: REMOVE_FROM_WISHLIST,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

export const deleteWishlist = () => async (dispatch, getState) => {
	try {
		const response = await axios.delete('/profiles/wishlist/', tokenConfig(getState));
		dispatch({
			type: DELETE_WISHLIST,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error, dispatch);
	}
};

// export const addToCalender = (eventID, next) => async (dispatch, getState) => {
// 	try {
// 		console.log('add to calender');
// 		const response = await axios.post(
// 			'/profiles/calender/',
// 			{ add: eventID },
// 			tokenConfig(getState)
// 		);
// 		dispatch({
// 			type: ADD_TO_CALENDER,
// 			payload: response.data
// 		});
// 		next();
// 	} catch (error) {
// 		reduxErrorHandler(error, dispatch);
// 	}
// };

// export const removeFromCalender = (eventID, next) => async (dispatch, getState) => {
// 	try {
// 		console.log('remove from calender');
// 		const response = await axios.post(
// 			'/profiles/calender/',
// 			{ add: eventID },
// 			tokenConfig(getState)
// 		);
// 		dispatch({
// 			type: ADD_TO_CALENDER,
// 			payload: response.data
// 		});
// 		next();
// 	} catch (error) {
// 		reduxErrorHandler(error, dispatch);
// 	}
// };

// ===================================================================================================

// export const editProfile = (id, data) => async (dispatch, getState) => {
// 	try {
// 		const response = await axios.put(`/profiles/${id}/`, data, {
// 			headers: { ...tokenConfig(getState).headers, 'Content-Type': 'multipart/form-data' }
// 		});
// 		dispatch({
// 			type: EDIT_PROFILE,
// 			payload: response.data
// 		});
// 	} catch (error) {
// 		reduxErrorHandler(error, dispatch);
// 	}
// };
