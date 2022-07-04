import { useReducer } from 'react';
import { authReducer, AuthContext, types } from '../';

export function AuthProvider({ children }) {
	const [authState, dispatch] = useReducer(authReducer, {}, initState);

	const login = (name = '') => {
		const user = {
			id: 'abc',
			name,
		};

		localStorage.setItem('user', JSON.stringify(user));

		dispatch({
			type: types.login,
			payload: user,
		});
	};

	return (
		<AuthContext.Provider value={{ ...authState, login }}>
			{children}
		</AuthContext.Provider>
	);
}

export function initState() {
	const user = JSON.parse(localStorage.getItem('user'));

	return {
		logged: !!user,
		user,
	};
}
