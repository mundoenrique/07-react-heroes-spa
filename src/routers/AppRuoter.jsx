import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';

export default function AppRuoter() {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route index element={<LoginPage />} />
					<Route path="*" element={<HeroesRoutes />} />
				</Route>
			</Routes>
		</>
	);
}
