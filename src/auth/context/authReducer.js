import { types } from '../types/types';

export function authReducer(state, action) {
	const { type, payload } = action;

	switch (type) {
		case types.login:
			return {
				...state,
				logged: true,
				name: payload.name,
			};
		case types.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
}
