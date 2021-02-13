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
	AUTH_ERROR
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
		// saveUser({ name, username, token }, next);
		dispatch({
			type: REGISTER,
			payload: { name, username, token }
		});
		dispatch({
			type: REGISTER_SUCCESS,
			payload: { status }
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const login = (user, next) => async (dispatch) => {
	try {
		const response = await axios.post('/api/login/', user);
		const { name, username, token, success } = response.data;
		saveUser({ name, username, token }, next);
		dispatch({
			type: LOGIN,
			payload: { name, username, token }
		});
		dispatch({
			type: LOGIN_SUCCESS,
			payload: { success }
		});
	} catch (error) {
		errorHandler(error);
	}
};

export const logout = () => async (dispatch, getState) => {

	try {
		const response = await axios.post('/api/logout/', null, tokenConfig(getState));
		removeUser();
		dispatch({
			type: LOGOUT,
			payload: { name: null, username: null, token: null }
		});
		dispatch({
			type: LOGOUT_SUCCESS,
			payload: { temp: response.data, message: 'logged out' }
		});
	} catch (error) {
		errorHandler(error);
	}
};

// ============================================================

export const authenticate = (data, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('userdata', JSON.stringify(data));
		next();
	}
};

export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('userdata')) {
		return JSON.parse(localStorage.getItem('userdata'));
	} else {
		return false;
	}
};
