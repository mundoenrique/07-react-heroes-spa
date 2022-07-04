import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export default function AppRuoter() {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<PublicRouter>
								<LoginPage />
							</PublicRouter>
						}
					/>
					<Route
						path="*"
						element={
							<PrivateRouter>
								<HeroesRoutes />
							</PrivateRouter>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}
