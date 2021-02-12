export const getAuthToken = (auth_token) => {
    // console.log('IN HERE' + auth_token);
    return {
        type: 'AUTH_TOKEN',
        payload: auth_token
    };
};