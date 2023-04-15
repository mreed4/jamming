import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div>
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
