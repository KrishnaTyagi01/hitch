export const isTokenExpired = (expiry) => Date.now() >= Date.parse(expiry);

export const loadUser = () => {
	if (typeof window !== 'undefined') {
		try {
			const serializedUser = localStorage.getItem('user');
			if (serializedUser === null) {
				return undefined;
			} else if (isTokenExpired(JSON.parse(serializedUser).expiry)) {
				return {
					persistedUser: null,
					isAuthenticated: false,
					authMessage: 'Session expired. Please login again'
				};
			} else {
				return {
					persistedUser: JSON.parse(serializedUser),
					isAuthenticated: true,
					authMessage: 'session restored'
				};
			}
		} catch (err) {
			return undefined;
		}
	}
};

export const saveUser = (user) => {
	if (typeof window !== 'undefined') {
		try {
			const serializedUser = JSON.stringify(user);
			localStorage.setItem('user', serializedUser);
		} catch (err) {
			console.log(err);
		}
	}
};

export const removeUser = () => {
	if (typeof window !== 'undefined') {
		try {
			const serializedUser = localStorage.getItem('user');
			if (serializedUser !== null) {
				localStorage.removeItem('user');
				return `Logged out ${serializedUser.name}`;
			}
			return 'No user currenlty logged in';
		} catch (err) {
			console.log(err);
			return undefined;
		}
	}
};
