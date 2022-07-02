import { useNavigate } from 'react-router-dom';
import { CustomLink } from '../../auth';

export function Navbar() {
	const navigate = useNavigate();

	const onLogout = () => {
		navigate('/', { replace: true });
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<span className="navbar-brand">Asociaciones</span>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<CustomLink className="nav-item nav-link" to="marvel">
						Marvel
					</CustomLink>
					<CustomLink className="nav-item nav-link" to="dc">
						DC
					</CustomLink>
					<CustomLink className="nav-item nav-link" to="search">
						Search
					</CustomLink>
					<CustomLink className="nav-item nav-link" to="hero">
						Hero
					</CustomLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">Enrique</span>
					<button className="nav-item nav-link btn" onClick={onLogout}>
						Salir
					</button>
				</ul>
			</div>
		</nav>
	);
}
