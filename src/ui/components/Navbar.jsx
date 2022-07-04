import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, CustomLink } from '../../auth';

export function Navbar() {
	const { user, logOut } = useContext(AuthContext);
	const navigate = useNavigate();

	const onLogout = () => {
		logOut();
		navigate('/');
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
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{user?.name}</span>
					<button className="nav-item nav-link btn" onClick={onLogout}>
						Salir
					</button>
				</ul>
			</div>
		</nav>
	);
}
