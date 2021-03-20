import axios from 'axios';

import { tokenConfig } from './authActions';
import reduxErrorHandler from './reduxErrorHandler';
import { CHANGE_PASSWORD, DELETE_PROFILE } from '../types';

export const changePassword = (details) => async (dispatch, getState) => {
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
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const deleteProfile = (id) => async (dispatch, getState) => {
	try {
		const response = await axios.delete(`/profiles/${id}/`, tokenConfig(getState));
		dispatch({
			type: DELETE_PROFILE,
			payload: response.data
		});
	} catch (error) {
		reduxErrorHandler(error);
	}
};
