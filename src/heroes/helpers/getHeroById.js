import { heroes } from '../';

export function getHeroById(id) {
	return heroes.find((hero) => hero.id === id);
}
