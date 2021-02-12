import axios from 'axios';

axios.defaults.baseURL = `http://${process.env.REACT_APP_BACKENDAPI}`;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const API = '167.71.237.202';
