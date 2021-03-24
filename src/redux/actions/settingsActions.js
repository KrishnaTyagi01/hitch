import axios from 'axios';

import { tokenConfig } from './authActions';
import reduxErrorHandler from './reduxErrorHandler';
import { CHANGE_PASSWORD, DELETE_PROFILE } from '../types';

export const changePassword = (details, next) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			'/api/change-password/',
			details,
			tokenConfig(getState)
		);
		dispatch({
			type: CHANGE_PASSWORD,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const deleteProfile = (id, next) => async (dispatch, getState) => {
	try {
		const response = await axios.delete(`/profiles/${id}/`, tokenConfig(getState));
		dispatch({
			type: DELETE_PROFILE,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};
