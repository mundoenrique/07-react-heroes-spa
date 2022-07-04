import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <Navbar />', () => {
	const user = {
		name: 'Yayita',
		id: '123456',
	};
	const logOutMock = jest.fn();
	const contexValue = { logged: true, user, logOut: logOutMock };

	beforeEach(() => jest.clearAllMocks());

	test('Debe mostrar el nombre del usuario', () => {
		render(
			<MemoryRouter>
				<AuthContext.Provider value={contexValue}>
					<Navbar />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText(user.name)).toBeTruthy();
	});

	test('Debe cerrar la sesión del usuario', () => {
		render(
			<AuthContext.Provider value={contexValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const buttonElement = screen.getByRole('button');
		fireEvent.click(buttonElement);

		expect(logOutMock).toBeCalled();
		expect(logOutMock).toBeCalledTimes(1);
		expect(mockUseNavigate).toBeCalled();
		expect(mockUseNavigate).toBeCalledTimes(1);
		expect(mockUseNavigate).toBeCalledWith('/', { replace: true });
	});
});
