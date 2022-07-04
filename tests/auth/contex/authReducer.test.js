import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
	const initState = {
		logged: false,
	};

	const user = {
		name: 'Yayita',
		id: '123456',
	};

	test('Debe retornar el estado por defecto', () => {
		const nextState = authReducer(initState, {});

		expect(nextState).toBe(initState);
	});

	test('Debe establcer el logged "true" y retornar la info del usuario', () => {
		const action = {
			type: types.login,
			payload: user,
		};

		const nextState = authReducer(initState, action);

		expect(nextState).toEqual({ logged: true, user });
	});

	test('Debe establcer el logged "false" y eliminar la info del usuario', () => {
		const action = {
			type: types.logout,
		};

		const nextState = authReducer({ logged: true, user }, action);

		expect(nextState).toEqual(initState);
	});
});
