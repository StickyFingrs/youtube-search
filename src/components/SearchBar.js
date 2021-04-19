import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: "" };
	};

	onInputChange = (event) => {
		this.setState({searchTerm: event.target.value});
	};

	onTermSubmit = (event) => {
		event.preventDefault();

		this.props.onTermSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onTermSubmit}>
					<div className="field">
						<label htmlFor="videoSearchBar">YouTube Search</label>
						<input
							id="videoSearchBar"
							className="search-bar ui"
							type="text"
							value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	};
};

export default SearchBar;