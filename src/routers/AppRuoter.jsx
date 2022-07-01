import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { DcPage, MarvelPage } from '../heroes/pages';

function AppRuoter() {
	return (
		<>
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
