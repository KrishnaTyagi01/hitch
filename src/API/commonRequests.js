import axios from 'axios';
import errorHandler from './errorHandler';
// import store from '../redux/store';

// const { token } = store.getState().authState;

export const getEvent = async (eventID) => {
	try {
		const res = await axios.get(`/events/${eventID}/`, {
			validateStatus: () => true
		});
		return { data: res.data, status: res.status };
	} catch (error) {
		errorHandler(error);
	}
};

export const getProfile = async (profileID) => {
	try {
		const res = await axios.get(`/profiles/${profileID}/`);
		return { data: res.data };
	} catch (error) {
		errorHandler(error);
	}
};
