import {
	GET_SELF_PROFILE,
	EDIT_PROFILE,
	DELETE_PROFILE,
	GET_SELF_EVENTS,
	GET_HOSTED_EVENTS,
	GET_ATTENDED_EVENTS,
	GET_UPCOMING_EVENTS,
	GET_WISHLIST_EVENTS,
	GET_RECOMMENDED_EVENTS,
	ADD_TO_WISHLIST,
	REMOVE_FROM_WISHLIST,
	DELETE_WISHLIST,
	CLEAR_STATE
} from '../types';

const initialState = {
	profile: null,
	hostedEvents: null,
	attendedEvents: null,
	upcomingEvents: null,
	wishlistEvents: null,
	wishlist: null,
	recommendedEvents: null,
	upcoming: null,
	attended: null,
	detail: null,
	actionSuccess: null
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SELF_PROFILE:
			return {
				...state,
				profile: action.payload,
				wishlist: JSON.parse(action.payload.event_wishlist)
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
		case GET_SELF_EVENTS:
			return {
				...state,
				hostedEvents: action.payload.hosted_events,
				attendedEvents: action.payload.attended_events,
				upcomingEvents: action.payload.upcoming_events,
				wishlistEvents: action.payload.wishlist_events,
				upcoming: action.payload.upcoming_events.map((item) => item.event.id),
				attended: action.payload.attended_events.map((item) => item.event.id)
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
		case GET_WISHLIST_EVENTS:
			return {
				...state,
				wishlistEvents: action.payload
			};
		case GET_RECOMMENDED_EVENTS:
			return {
				...state,
				recommendedEvents: action.payload
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: JSON.parse(action.payload.wishlist)
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: JSON.parse(action.payload.wishlist)
			};
		case DELETE_WISHLIST:
			return {
				...state,
				actionSuccess: action.payload.success,
				wishlist: JSON.parse(action.payload.wishlist)
			};
		case CLEAR_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
}
