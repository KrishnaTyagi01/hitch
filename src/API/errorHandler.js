// import { Redirect } from 'react-router-dom';
// import Page404 from '../pages/Page404';

const errorHandler = (error) => {
	// console.error(error);
	// console.log(error.config);
	console.log(error);
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);

		if (400 <= error.response.status <= 499) {
			switch (error.response.status) {
				case 400:
					return {
						error: {
							data: error.response.data,
							status: error.response.status
						}
					};
				case 401:
					return {
						error: {
							data: error.response.data,
							status: error.response.status
						}
					};
				case 404:
					console.log(error.response.data);
					return {
						error: {
							data: error.response.data,
							status: error.response.status
						}
					};
				default:
					break;
			}
		} else if (500 <= error.response.status <= 599) {
			return {
				error: {
					data: error.response.data,
					status: error.response.status
				}
			};
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

export default errorHandler;
