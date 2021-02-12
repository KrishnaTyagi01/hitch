import { combineReducers } from 'redux';

const AuthTokenReducer = (prevAuthToken = null, action) => {
    console.log('OUT HERE');
    if (action.type === 'AUTH_TOKEN') {
        console.log('IN HERE');
        return action.payload;
    }
    return prevAuthToken;
}

export default combineReducers({
    auth_token: AuthTokenReducer
})

