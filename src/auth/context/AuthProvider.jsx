import { useReducer } from 'react';
import { authReducer, AuthContext } from '../';

const initialState = {
	logged: false,
};

export function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
