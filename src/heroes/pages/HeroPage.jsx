import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../';

export function HeroPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const heroInfo = useMemo(() => getHeroById(id), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!heroInfo) {
		return <Navigate to={-1} replace={true} />;
	}

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		heroInfo;

	const heroImageUrl = `/assets/images/${id}.jpg`;

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img src={heroImageUrl} alt={superhero} className="img-thumbnail" />
			</div>
			<div className="col-8">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego:</b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b> {publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance:</b> {first_appearance}
					</li>
				</ul>
				<h5 className="mt-3">Characters</h5>
				<p>{characters}</p>

				<button className="btn btn-outline-primary" onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
}
