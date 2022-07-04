import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import AppRuoter from '../../src/routers/AppRuoter';

describe('Pruebsa en <AppRuoter />', () => {
	const user = {
		name: 'Yayita',
		id: '123456',
	};

	test('Debe mostrar el componente login si no esta autenticado', () => {
		const contexValue = { logged: false };

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contexValue}>
					<AppRuoter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText('Inicio')).toBeTruthy();
		expect(screen.getAllByText('Inicio').length).toBe(1);
	});

	test('Debe mostrar el componente login si esta autenticado', () => {
		const contexValue = { logged: true, user };

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contexValue}>
					<AppRuoter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText('Marvel Comics')).toBeTruthy();
		expect(screen.getAllByText('Marvel Comics').length).toBe(1);
		expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
	});
});
