import { heroes } from '../data/heroes';

export function getHeroesByName(HeroName = '') {
	HeroName = HeroName.toLocaleLowerCase().trim();

	if (HeroName.length === 0) return [];

	return heroes.filter((hero) =>
		hero.superhero.toLocaleLowerCase().includes(HeroName)
	);
}
