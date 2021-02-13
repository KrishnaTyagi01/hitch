import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import eventReducer from './eventReducer';
import profileReducer from './profileReducer';
import commonReducer from './commonReducer';

const authState = 'authState';

export default combineReducers({
    [authState]: authReducer,
    userState: userReducer,
    eventState: eventReducer,
    profileState: profileReducer,
    commonState: commonReducer
});

