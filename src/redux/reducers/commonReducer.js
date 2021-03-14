
import {
	GET_EVENTS,
	GET_EVENT,
	GET_PROFILE,
	INC_COUNT,
	CLEAR_STATE,
	SERVER_ERROR
} from '../types';

const initialState = {
	events: null,
	event: null,
	profile: null,
	count: 0,
	message: ''
};

export default function eventReducer(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS:
			return {
				...state,
				events: action.payload
			};
		case GET_EVENT:
			return {
				...state,
				event: action.payload
			};
		case GET_PROFILE:
			return {
				...state,
				profile: action.payload
			};
		case INC_COUNT:
			return {
				...state,
				count: state.count + action.payload
			};
		case SERVER_ERROR:
			return {
				...initialState,
				message: 'Server error. Please try again'
			};
		case CLEAR_STATE:
			return {
				...initialState,
				message: action.payload
			};
		default:
			return state;
	}
}
