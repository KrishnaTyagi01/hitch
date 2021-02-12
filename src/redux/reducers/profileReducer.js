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
	DELETE_WISHLIST
} from '../types';

const initialState = {
	profile: null,
	detail: null
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SELF_PROFILE:
			return {
				...state,
				profile: action.payload
			};
		case EDIT_PROFILE:
			return {
				...state
			};
		case DELETE_PROFILE:
			return {
				...state,
				message: 'Logged out'
			};
		case GET_HOSTED_EVENTS:
			return {
				...state,
				message: 'Logged out'
			};
		case GET_ATTENDED_EVENTS:
			return {
				...state,
				message: 'Logged out'
			};
		case GET_UPCOMING_EVENTS:
			return {
				...state,
				message: 'Logged out'
			};
		case GET_WISHLIST:
			return {
				...state,
				message: 'Logged out'
			};
		case ADD_TO_WISHLIST:
			return {
				...state,
				message: 'Logged out'
			};
		case REMOVE_FROM_WISHLIST:
			return {
				...state,
				message: 'Logged out'
			};
		case DELETE_WISHLIST:
			return {
				...state,
				message: 'Logged out'
			};
		default:
			return state;
	}
}
