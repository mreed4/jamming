import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state.searchResults = "Search";
  // }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist"></div>
          <SearchResults />
          {/* <Playlist /> */}
        </div>
      </div>
    );
  }
}

export default App;
