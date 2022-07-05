import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => {
	beforeEach(() => jest.clearAllMocks());

	test('Debe mostrar correctamento con valores por defecto', () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

		const searchHero = screen.getByLabelText('search-hero');

		expect(container).toMatchSnapshot();
		expect(searchHero).toBeTruthy();
	});

	test('Debe mostrar resultados con "Batman"', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		const img = screen.getByRole('img');

		expect(input.value).toBe('batman');
		expect(img.src).toContain('.jpg');
	});

	test('Debe mostrar mensaje de no encontrado para "Elena123"', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=Elena123']}>
				<SearchPage />
			</MemoryRouter>
		);

		const searchHero = screen.getByLabelText('no-hero');

		expect(searchHero).toBeTruthy();
	});

	test('Debe llamar el navigate a la nueva pantalla', () => {
		render(
			<MemoryRouter initialEntries={['/search']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, {
			target: { name: 'searchText', value: 'superman' },
		});

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(mockUseNavigate).toBeCalled();
		expect(mockUseNavigate).toBeCalledTimes(1);
		expect(mockUseNavigate).toBeCalledWith('?q=superman');
	});
});
