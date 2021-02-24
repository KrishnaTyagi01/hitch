import { GET_EVENTS, GET_EVENT, GET_PROFILE, INC_COUNT, CLEAR_STATE } from '../types';

const initialState = {
	events: null,
	event: null,
	profile: null,
	count: 0
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
		case CLEAR_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
