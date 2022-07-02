import { heroes } from '../';

export function getHeroresByPublisher(publisher) {
	const validPublisher = ['DC Comics', 'Marvel Comics'];

	if (!validPublisher.includes(publisher)) {
		throw new Error(`${publisher} is not valid publisher`);
	}

	return heroes.filter((hero) => hero.publisher === publisher);
}
