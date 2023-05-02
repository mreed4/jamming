import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import ItemList from "./ItemList";
import SearchPage from "./SearchPage";
import ResultsPage from "./ResultsPage";
import LoadingPage from "./LoadingPage";
import AlbumDetailsPage from "./AlbumDetailsPage";
import ScrollToTop from "./ScrollToTop";
import SearchForm from "./SearchForm";
import Playlist from "./Playlist";

export default function App() {
  const { searchResults, resultsArray } = useContext(AppContext);

  return (
    <Router>
      <ScrollToTop>
        <header>
          <div>
            <h1 id="site-title">
              <Link to="/">Audiophile</Link>
            </h1>
            <div id="conditional-search-bar">
              <SearchForm />
            </div>
          </div>
          <hr />

          <Link to="/results/tracks" className="back-button">
            &larr; Back
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            {resultsArray.length > 0 ? (
              <Route path="/results" element={<ResultsPage />}>
                {resultsArray.reverse().map((key) => {
                  return <Route key={key} path={key} element={<ItemList items={searchResults[key].items} itemTypes={key} />} />;
                })}
                {/* 

              The above array.map is the equivalent of hardcoding the following:

              <Route path="tracks" element={<ItemList items={searchResults.tracks.items} itemTypes="tracks" />} />
              <Route path="artists" element={<ItemList items={searchResults.artists.items} itemTypes="artists" />} />
              <Route path="albums" element={<ItemList items={searchResults.albums.items} itemTypes="albums" />} />

               */}
              </Route>
            ) : (
              <Route path="/results/tracks" element={<LoadingPage />} />
            )}
            {/* <Route path="/playlist" element={<Playlist />} /> */}

            <Route path="/album/:artist/:name" element={<AlbumDetailsPage />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </main>
      </ScrollToTop>
    </Router>
  );
}
