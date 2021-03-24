import axios from 'axios';

import { tokenConfig } from './authActions';
import reduxErrorHandler from './reduxErrorHandler';
import {
	CHECK_USER_EXISTENCE,
	VALIDATE_OTP,
	RESET_PASSWORD,
	RESET_PASSWORD_CONFIRM,
	ACTIVATE_LOGIN_PROMPT,
	DEACTIVATE_LOGIN_PROMPT
} from '../types';

export const checkUserExistence = (username, next) => async (dispatch) => {
	try {
		const response = await axios.post('/api/check-user-existence/', username);
		dispatch({
			type: CHECK_USER_EXISTENCE,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const validateOTP = (otp, next) => async (dispatch) => {
	try {
		const response = await axios.post('/api/validate-otp/', otp);
		dispatch({
			type: VALIDATE_OTP,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const resetPassword = (username, next) => async (dispatch, getState) => {
	try {
		const response = await axios.post('/api/change-password/', username);
		dispatch({
			type: RESET_PASSWORD,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const resetPasswordConfirm = (details, next) => async (dispatch, getState) => {
	try {
		const response = await axios.post(
			'/api/change-password/confirm/',
			details,
			tokenConfig(getState)
		);
		dispatch({
			type: RESET_PASSWORD_CONFIRM,
			payload: response.data
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const activateLoginPrompt = (next) => async (dispatch) => {
	try {
		dispatch({
			type: ACTIVATE_LOGIN_PROMPT,
			payload: true
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};

export const deactivateLoginPrompt = (next) => async (dispatch) => {
	try {
		dispatch({
			type: DEACTIVATE_LOGIN_PROMPT,
			payload: false
		});
		if (next && typeof next === 'function') next();
	} catch (error) {
		reduxErrorHandler(error);
	}
};
