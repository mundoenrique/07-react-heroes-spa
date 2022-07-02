import { getHeroresByPublisher } from '../';

export function HeroList({ publisher }) {
	const heroes = getHeroresByPublisher(publisher);
	return (
		<>
			<ul>
				{heroes.map((hero) => (
					<li key={hero.id}>{hero.superhero}</li>
				))}
			</ul>
		</>
	);
}
