import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard, getHeroesByName } from '../';
import { useForm } from '../../hooks';

export function SearchPage() {
	const navigate = useNavigate();
	const { search } = useLocation();
	const { q = '' } = queryString.parse(search);
	const heroes = useMemo(() => getHeroesByName(q), [q]);
	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;
	const { searchText, onInputchange } = useForm({ searchText: q });

	const onSearchHero = (event) => {
		event.preventDefault();

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>SearchPage</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchHero} aria-label="form">
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							autoComplete="off"
							name="searchText"
							value={searchText}
							onChange={onInputchange}
						/>
						<button className="btn btn-outline-primary mt-2 animate__animated animate__fadeIn">
							Search
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{showSearch && (
						<div
							className="alert alert-primary animate__animated animate__fadeIn"
							aria-label="search-hero"
						>
							Search a hero
						</div>
					)}
					{showError && (
						<div className="alert alert-danger" aria-label="no-hero">
							No hero with <b>{q}</b>
						</div>
					)}

					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
}
