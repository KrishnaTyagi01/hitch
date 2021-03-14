
import {
	GET_SELF_PROFILE,
	EDIT_PROFILE,
	DELETE_PROFILE,
	GET_HOSTED_EVENTS,
	GET_ATTENDED_EVENTS,
	GET_UPCOMING_EVENTS,
	GET_WISHLIST,
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST,
	DELETE_WISHLIST,
	CLEAR_STATE
} from '../types';

const initialState = {
	profile: null,
	hostedEvents: [],
	attendedEvents: [],
	upcomingEvents: [],
	wishlist: [],
	event_wishlist: [],
	detail: null,
	actionSuccess: null
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SELF_PROFILE:
			return {
				...state,
				profile: action.payload,
				wishlist: action.payload.event_wishlist
			};
		case EDIT_PROFILE:
			return {
				...state,
				profile: action.payload
			};
		case DELETE_PROFILE:
			return {
				...state
			};
		case GET_HOSTED_EVENTS:
			return {
				...state,
				hostedEvents: action.payload
			};
		case GET_ATTENDED_EVENTS:
			return {
				...state,
				attendedEvents: action.payload
			};
		case GET_UPCOMING_EVENTS:
			return {
				...state,
				upcomingEvents: action.payload
			};
		case GET_WISHLIST:
			return {
				...state,
				event_wishlist: action.payload
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: action.payload.wishlist
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: action.payload.wishlist
			};
		case DELETE_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: action.payload.wishlist,
				event_wishlist: []
			};
		case CLEAR_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
