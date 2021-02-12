import {
	REGISTER,
	LOGIN,
	LOGOUT,
	CHANGE_PASSWORD,
	RESET_PASSWORD
} from '../types';

const initialState = {
	name: null,
	username: null,
	token: null
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return {
				...state,
				name: action.payload.name,
				username: action.payload.username,
				token: action.payload.token
			};
		case LOGIN:
			return {
				...state,
				name: action.payload.name,
				username: action.payload.username,
				token: action.payload.token
			};
		case LOGOUT:
			return {
				...state,
				name: action.payload.name,
				username: action.payload.username,
				token: action.payload.token
			};
		default:
			return state;
	}
}
