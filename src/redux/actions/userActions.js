
import axios from 'axios';

import { tokenConfig } from './authActions';
import { errorHandler } from './errorHandler';
import {
	CHECK_USER_EXISTENCE,
	VALIDATE_OTP,
	RESET_PASSWORD,
	RESET_PASSWORD_CONFIRM,
	ACTIVATE_LOGIN_PROMPT,
	DEACTIVATE_LOGIN_PROMPT
} from '../types';

export const checkUserExistence = (username) => async (dispatch) => {
	try {
		const response = await axios.post('/api/check-user-existence/', username);
		dispatch({
			type: CHECK_USER_EXISTENCE,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const validateOTP = (otp) => async (dispatch) => {
	try {
		const response = await axios.post('/api/validate-otp/', otp);
		dispatch({
			type: VALIDATE_OTP,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const resetPassword = (username) => async (dispatch, getState) => {
	try {
		const response = await axios.post('/api/change-password/', username);
		dispatch({
			type: RESET_PASSWORD,
			payload: response.data
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const resetPasswordConfirm = (details) => async (dispatch, getState) => {
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
	} catch (error) {
		errorHandler(error);
	}
};

export const activateLoginPrompt = () => async (dispatch) => {
	try {
		dispatch({
			type: ACTIVATE_LOGIN_PROMPT,
			payload: true
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const deactivateLoginPrompt = () => async (dispatch) => {
	try {
		dispatch({
			type: DEACTIVATE_LOGIN_PROMPT,
			payload: false
		});
	} catch (error) {
		errorHandler(error);
	}
};
