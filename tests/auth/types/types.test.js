import { types } from '../../../src/auth';

describe('Pruebas en Types', () => {
	test('Debe regresar los types generados', () => {
		expect(types).toEqual({
			login: '[Auth] login',
			logout: expect.any(String),
		});
	});
});
