import { Redirect } from 'react-router-dom';
import Page404 from '../pages/Page404';

const errorHandler = (error) => {
	console.error(error);
	console.log(error.config);
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response);
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request);
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message);
	}
};

export default errorHandler;
