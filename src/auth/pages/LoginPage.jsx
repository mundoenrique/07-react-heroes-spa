import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../';

export function LoginPage() {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogin = () => {
		login('Enrique');
		navigate('marvel', { replace: true });
	};

	return (
		<div className="container mt5">
			<h1>Inicio</h1>
			<hr />
			<button className="btn btn-outline-info" onClick={onLogin}>
				Iniciar
			</button>
		</div>
	);
}
