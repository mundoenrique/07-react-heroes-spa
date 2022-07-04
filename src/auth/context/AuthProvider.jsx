import { useReducer } from 'react';
import { authReducer, AuthContext, types } from '../';

const initialState = {
	logged: false,
};

export function AuthProvider({ children }) {
	const [authState, dispatch] = useReducer(authReducer, initialState);

	const login = (name = '') => {
		const action = {
			type: types.login,
			payload: {
				id: 'abc',
				name,
			},
		};
		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ ...authState, login }}>
			{children}
		</AuthContext.Provider>
	);
}
