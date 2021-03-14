
import {
	GET_EVENTS,
	CREATE_EVENT,
	EDIT_EVENT,
	REGISTER_FOR_EVENT,
	PAYMENT_SUCCESS,
	PAYMENT_FAILURE,
	CLEAR_STATE
} from '../types';

const initialState = {
	events: [],
	registrationStatus: null,
	paymentStatus: null,
	count: 0
};

export default function eventReducer(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTS:
			return {
				...state,
				events: action.payload
			};
		case REGISTER_FOR_EVENT:
			return {
				...state,
				registrationStatus: action.payload
			};
		case PAYMENT_SUCCESS:
			return {
				...state,
				paymentStatus: action.payload
			};
		case PAYMENT_FAILURE:
			return {
				...state,
				paymentStatus: action.payload
			};
		case CLEAR_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
