import axios from 'axios';
import errorHandler from './errorHandler';
// import store from '../redux/store';

// const { token } = store.getState().authState;

export const CheckUserExist = async (username) => {
	const res = await axios.post('/api/check-user-existence/', { username: username });
	return res;
};

export const authenticate = (data, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('userdata', JSON.stringify(data));
		next();
	}
};

export const validateOtp = async (username, otp) => {
	const res = await axios.post('/api/validate-otp/', {
		username: username,
		otp: otp
	});
	return res;
};

export const registerUser = async (userdetails) => {
	const res = await axios.post('/api/register/', {
		email: userdetails.email,
		name: userdetails.name,
		password: userdetails.password
	});
	return res;
};

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
