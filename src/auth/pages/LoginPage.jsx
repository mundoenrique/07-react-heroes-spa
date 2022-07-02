import { useNavigate } from 'react-router-dom';

export function LoginPage() {
	const navigate = useNavigate();

	const onLogin = () => {
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
