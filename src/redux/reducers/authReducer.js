import {
	REGISTER,
	LOGIN,
	LOGIN_FAIL,
	LOGOUT,
	// CHANGE_PASSWORD,
	// RESET_PASSWORD,
	AUTH_ERROR
} from '../types';

const initialState = {
	name: null,
	username: null,
	token: null,
	expiry: null,
	isAuthenticated: false,
	authMessage: null
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return {
				...state,
				name: action.payload.name,
				username: action.payload.username,
				token: action.payload.token,
				isAuthenticated: true,
				authMessage: action.payload.status
			};
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				username: action.payload.username,
				token: action.payload.token,
				expiry: action.payload.expiry,
				isAuthenticated: action.payload.success,
				authMessage: `Logged in with ${action.payload.username}`
			};
		case LOGIN_FAIL:
			return {
				...state,
				authMessage: action.payload.non_field_errors
			};
		case LOGOUT:
			return {
				...initialState,
				authMessage: 'Logged out'
			};
		case AUTH_ERROR:
			return {
				...initialState,
				authMessage: 'Authorization Error'
			};
		default:
			return state;
	}
}
