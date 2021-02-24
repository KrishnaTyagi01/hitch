import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import throttle from "lodash/throttle";

import rootReducer from './reducers';
import { loadUser } from '../localStorage';

const middleware = [thunk];

const authState = 'authState';

const userData = loadUser();
const initialState = {
	[authState]:
		userData === undefined
			? undefined
			: {
					...userData?.persistedUser,
					isAuthenticated: userData?.isAuthenticated,
					authMessage: userData?.authMessage
			  }
};

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
