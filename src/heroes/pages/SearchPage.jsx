import { HeroCard } from '../';
import { useForm } from '../hooks/useForm';

export function SearchPage() {
	const { searchText, onInputchange } = useForm({ searchText: '' });

	const onSearchHero = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<h1>SearchPage</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchHero}>
						<input
							type="text"
							placeholder="Search a hero"
							className="form-control"
							autoComplete="off"
							name="searchText"
							value={searchText}
							onChange={onInputchange}
						/>
						<button className="btn btn-outline-primary mt-2">Search</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					<div className="alert alert-primary">Search a hero</div>
					<div className="alert alert-danger">
						No hero with <b>ABC</b>
					</div>
					<HeroCard />
				</div>
			</div>
		</>
	);
}
