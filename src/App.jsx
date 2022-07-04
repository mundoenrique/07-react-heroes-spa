import { AuthProvider } from './auth';
import AppRuoter from './routers/AppRuoter';

function App() {
	return (
		<AuthProvider>
			<AppRuoter />
		</AuthProvider>
	);
}

export default App;
