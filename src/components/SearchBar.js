import React, {useState} from 'react';

const SearchBar = (props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const onInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const onTermSubmit = (event) => {
		event.preventDefault();

		props.onTermSubmit(searchTerm);
	};

	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={onTermSubmit}>
				<div className="field">
					<label htmlFor="videoSearchBar">YouTube Search</label>
					<input
						id="videoSearchBar"
						className="search-bar ui"
						type="text"
						value={searchTerm}
						onChange={onInputChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;