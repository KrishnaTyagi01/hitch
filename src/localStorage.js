export const loadUser = () => {
	if (typeof window !== 'undefined') {
		try {
			const serializedUser = localStorage.getItem('user');
			if (serializedUser === null) {
				return undefined;
			}
			console.log(serializedUser);
			return JSON.parse(serializedUser);
		} catch (err) {
			return undefined;
		}
	}
};

export const saveUser = (user, next) => {
	if (typeof window !== 'undefined') {
		try {
			const serializedUser = JSON.stringify(user);
			localStorage.setItem('user', serializedUser);
			next();
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
