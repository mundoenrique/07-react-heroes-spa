import { memo } from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = memo(function (props) {
	const { id, superhero, publisher, alter_ego, first_appearance, characters } =
		props;

	const heroImageUrl = `/assets/images/${id}.jpg`;
	return (
		<>
			<div className="col animate__animated animate__fadeInDown">
				<div className="card">
					<div className="row no-gutters">
						<div className="col-4 animate__animated animate__fadeInDown">
							<img src={heroImageUrl} className="card-img" alt={superhero} />
						</div>
						<div className="col-8">
							<div className="card-body">
								<h5 className="card-title">{superhero}</h5>
								<p className="card-text"> {alter_ego} </p>
								<div className="card-link">
									<Link to={`/hero/${id}`}>Mas...</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
});
