import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRouter } from '../../src/routers/PrivateRouter';

describe('Pruebas en <PrivateRouter />', () => {
	const user = {
		name: 'Yayita',
		id: '123456',
	};

	test('Debe mostrar el children si esta autenticado', () => {
		const contexValue = { logged: true, user };
		const text = 'Private ruote';
		const uri = '/search?q=batman';
		Storage.prototype.setItem = jest.fn();

		render(
			<MemoryRouter initialEntries={[uri]}>
				<AuthContext.Provider value={contexValue}>
					<PrivateRouter>
						<h1>{text}</h1>
					</PrivateRouter>
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText(text)).toBeTruthy();
		expect(localStorage.setItem).toBeCalled();
		expect(localStorage.setItem).toBeCalledWith('lastPath', uri);
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', uri);
	});

	test('Debe navegar si no esta autenticado', () => {
		const contexValue = { logged: false };

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contexValue}>
					<Routes>
						<Route
							path="/marvel"
							element={
								<PrivateRouter>
									<h1>Marvel Page</h1>
								</PrivateRouter>
							}
						/>
						<Route path="/" element={<h1>Ruta publica</h1>} />
					</Routes>
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText('Ruta publica')).toBeTruthy();
	});
});
