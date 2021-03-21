import {
	CHECK_USER_EXISTENCE,
	// USER_EXISTS,
	// USER_DOES_NOT_EXIST,
	VALIDATE_OTP,
	// OTP_VALID,
	// OTP_INVALID,
	// REGISTER,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	// LOGIN,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	// LOGOUT,
	LOGOUT_SUCCESS,
	// LOGOUT_FAIL,
	CHANGE_PASSWORD,
	RESET_PASSWORD,
	RESET_PASSWORD_CONFIRM,
	USER_LOADED,
	USER_LOADING,
	SET_REFERRER,
	// LOGIN_PROMPT_ACTIVE,
	ACTIVATE_LOGIN_PROMPT,
	DEACTIVATE_LOGIN_PROMPT,
	CLEAR_STATE
} from '../types';

const initialState = {
	isLoggedIn: null,
	userExists: null,
	isEmail: null,
	OTPValidated: null,
	registerStatus: null,
	isNewUser: false,
	loginSuccess: null,
	isLoading: false,
	message: null,
	temp: null,
	referrer: null,
	loginPromptActive: false
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
				isLoggedIn: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isNewUser: true,
				registerStatus: action.payload.status
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLoggedIn: false,
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
		case LOGIN_FAIL:
		case REGISTER_FAIL:
			return {
				...state,
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
				isLoading: false,
				user: action.payload
			};
		case SET_REFERRER:
			return {
				...state,
				referrer: action.payload
			};
		case ACTIVATE_LOGIN_PROMPT:
			return {
				...state,
				loginPromptActive: action.payload
			};
		case DEACTIVATE_LOGIN_PROMPT:
			return {
				...state,
				loginPromptActive: action.payload
			};
		case CLEAR_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
