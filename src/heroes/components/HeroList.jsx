import { getHeroresByPublisher, HeroCard } from '../';

export function HeroList({ publisher }) {
	const heroes = getHeroresByPublisher(publisher);
	return (
		<>
			<div className="row rows-cols-1 row-cols-md-3 g-3">
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	);
}
