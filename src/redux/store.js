import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import throttle from "lodash/throttle";

import rootReducer from './Reducers';
import { loadUser, saveUser } from '../localStorage';

const middleware = [thunk];

const authState = 'authState';
const persistedUser = loadUser();
console.log(persistedUser);
const initialState = {
	[authState]: persistedUser
};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);


export default store;
