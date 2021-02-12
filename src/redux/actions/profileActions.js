import axios from 'axios';

import { errorHandler } from './errorHandler';
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
} from '../types';

export const getSelfProfile = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/self/', tokenConfig(getState));
		dispatch({
			type: GET_SELF_PROFILE,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const editProfile = () => async (dispatch, getState) => {
	try {
		const response = await axios.put('/profiles/self/', tokenConfig(getState));
		dispatch({
			type: EDIT_PROFILE,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
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
		errorHandler(error);
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
		errorHandler(error);
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
		errorHandler(error);
	}
};

export const getWishlist = () => async (dispatch, getState) => {
	try {
		const response = await axios.get('/profiles/wishlist', tokenConfig(getState));
		dispatch({
			type: GET_WISHLIST,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
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
		errorHandler(error);
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
		errorHandler(error);
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
		errorHandler(error);
	}
};
