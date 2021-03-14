import { AUTH_ERROR, LOGIN_FAIL, SERVER_ERROR } from '../types';

export const errorHandler = (error, dispatch) => {
	console.error(error);

	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);

		if (400 <= error.response.status <= 499) {
			switch (error.response.status) {
				case 400:
					return dispatch({
						type: LOGIN_FAIL,
						payload: error.response.data
					});
				case 401:
					return dispatch({
						type: AUTH_ERROR,
						payload: error.response.data
					});
				default:
					break;
			}
		} else if (500 <= error.response.status <= 599) {
			return dispatch({
				type: SERVER_ERROR,
				payload: error.response.data
			});
		} else {
			console.error(error);
		}
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.error(error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	}
};
