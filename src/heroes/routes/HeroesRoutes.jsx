import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../../heroes';

export function HeroesRoutes() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="marvel" element={<MarvelPage />} />
				<Route path="dc" element={<DcPage />} />
				<Route path="search" element={<SearchPage />} />
				<Route path="hero" element={<HeroPage />} />
			</Routes>
		</>
	);
}
