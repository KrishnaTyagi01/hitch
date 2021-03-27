import { GET_EVENTS, GET_EVENT, GET_PROFILE, SEARCH_EVENTS, CLEAR_STATE } from '../types';

const initialState = {
	events: null,
	event: null,
	profile: null,
	searchResults: null,
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
		case SEARCH_EVENTS:
			return {
				...state,
				searchResults: action.payload
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
