import {
	GET_EVENTS,
	CREATE_EVENT,
	EDIT_EVENT,
	REGISTER_FOR_EVENT,
	VERIFY_PAYMENT,
	INC_COUNT,
	CLEAR_STATE
} from '../types';

const initialState = {
	events: [],
	count: 0
};

export default function eventReducer(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS:
			return {
				...state,
				events: action.payload
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
