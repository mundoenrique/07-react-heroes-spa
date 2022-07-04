import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRouter } from '../../src/routers/PublicRouter';

describe('Pruebas en <PublicRouter />', () => {
	const user = {
		name: 'Yayita',
		id: '123456',
	};

	test('Debe mostrar el children si no esta autenticado', () => {
		const contexValue = { logged: false };

		render(
			<AuthContext.Provider value={contexValue}>
				<PublicRouter>
					<h1>Ruta publica</h1>
				</PublicRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Ruta publica')).toBeTruthy();
	});

	test('Debe navegar si no esta autenticado', () => {
		const contexValue = { logged: true, user };

		render(
			<MemoryRouter initialEntries={['/']}>
				<AuthContext.Provider value={contexValue}>
					<Routes>
						<Route
							path="/"
							element={
								<PublicRouter>
									<h1>Ruta publica</h1>
								</PublicRouter>
							}
						/>
						<Route path="/marvel" element={<h1>Marvel Page</h1>} />
					</Routes>
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText('Marvel Page')).toBeTruthy();
	});
});
