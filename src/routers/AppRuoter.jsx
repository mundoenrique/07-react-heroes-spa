import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { DcPage, MarvelPage } from '../heroes';
import { Navbar } from '../ui';

function AppRuoter() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/">
					<Route index element={<LoginPage />} />
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default AppRuoter;
