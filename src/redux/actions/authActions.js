import axios from 'axios';
import { errorHandler } from './errorHandler';
import { saveUser, removeUser } from '../../localStorage';
import {
	REGISTER,
	REGISTER_SUCCESS,
	LOGIN,
	LOGIN_SUCCESS,
	LOGOUT,
	LOGOUT_SUCCESS,
	AUTH_ERROR,
	CLEAR_STATE
} from '../types';

export const tokenConfig = (getState) => {
	const config = { headers: {} };
	const token = getState().authState.token;
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}
	return config;
};

export const register = (userdetails, next) => async (dispatch) => {
	try {
		const response = await axios.post('/api/register/', userdetails);
		console.log(response);
		const { name, username, token, status } = response;
		saveUser({ name, username, token });
		next();
		dispatch({
			type: REGISTER,
			payload: { name, username, token, status }
		});
		dispatch({
			type: REGISTER_SUCCESS,
			payload: { status }
		});
	} catch (error) {
		errorHandler(error, dispatch);
	}
};

export const login = (user, next) => async (dispatch) => {
	try {
		const response = await axios.post('/api/login/', user);
		const { name, username, token, expiry, success } = response.data;
		saveUser({ name, username, token, expiry });
		dispatch({
			type: LOGIN,
			payload: { name, username, token, expiry, success }
		});
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { success }
		});
		next();
	} catch (error) {
		errorHandler(error, dispatch);
	}
};

export const logout = () => async (dispatch, getState) => {
	try {
		const response = await axios.post('/api/logout/', null, tokenConfig(getState));
		removeUser();
		dispatch({
			type: LOGOUT,
			payload: null
		});
		dispatch({
			type: LOGOUT_SUCCESS,
			payload: { temp: response, message: 'logged out' }
		});
		dispatch({
			type: CLEAR_STATE,
			payload: null
		});
	} catch (error) {
		errorHandler(error, dispatch);
	}
};
