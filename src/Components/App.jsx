import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import ItemList from "./ItemList";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

export default function App() {
  const { searchResults } = useContext(AppContext);
  // console.log(searchResults.tracks.items);

  return (
    <Router>
      <main>
        <h1>Audiofile</h1>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/results" element={<SearchResults />}>
            <Route path="" element={<ItemList items={searchResults.tracks.items} itemType="tracks" />} />
            {Object.keys(searchResults).length > 0 &&
              Object.keys(searchResults)
                .reverse()
                .map((key) => {
                  return <Route key={key} path={key} element={<ItemList items={searchResults[key].items} itemType={key} />} />;
                })}
          </Route>
          {/* <Route path="/playlist" element={<Playlist />} /> */}
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </main>
    </Router>
  );
}
