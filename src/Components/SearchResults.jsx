import TrackList from "./TrackList";
import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
      </div>
    );
  }
}

export default SearchResults;
