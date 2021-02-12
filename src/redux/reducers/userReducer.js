import {
	CHECK_USER_EXISTENCE,
	USER_EXISTS,
	USER_DOES_NOT_EXIST,
	VALIDATE_OTP,
	OTP_VALID,
	OTP_INVALID,
	REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	CHANGE_PASSWORD,
	RESET_PASSWORD,
	RESET_PASSWORD_CONFIRM,
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR
} from '../types';

const initialState = {
	userExists: null,
	isEmail: null,
	OTPValidated: null,
	registerStatus: null,
	isNewUser: false,
	loginSuccess: null,
	isAuthenticated: null,
	isLoading: false,
	message: null,
	temp: null
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case CHECK_USER_EXISTENCE:
			return {
				...state,
				userExists: action.payload.user_exists,
				isEmail: action.payload.is_email,
				message: action.payload.message
			};
		case VALIDATE_OTP:
			return {
				...state,
				OTPValidated: action.payload.success,
				message: action.payload.message
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loginSuccess: action.payload.success,
				isAuthenticated: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isNewUser: true,
				registerStatus: action.payload.status
			};
		case LOGOUT_SUCCESS:
			return {
				message: action.payload.message,
				temp: action.payload.temp
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				message: 'CHANGE_PASSWORD'
			};
		case RESET_PASSWORD:
			return {
				...state,
				message: 'RESET_PASSWORD'
			};
		case RESET_PASSWORD_CONFIRM:
			return {
				...state,
				message: 'RESET_PASSWORD_CONFIRM'
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
				isAuthenticated: false,
				isLoading: false
			};
		case USER_LOADING:
			return {
				...state,
				isLoading: true
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			};
		default:
			return state;
	}
}
