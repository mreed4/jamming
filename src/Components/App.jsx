import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Header from "./Header";
import ItemList from "./ItemList";
import SearchPage from "./SearchPage";
import ResultsPage from "./ResultsPage";
import LoadingPage from "./LoadingPage";
import AlbumDetailsPage from "./AlbumDetailsPage";
import ArtistDetailsPage from "./ArtistDetailsPage";
import ScrollToTop from "./ScrollToTop";
import Playlist from "./Playlist";

export default function App() {
  const { searchResults, resultsArray } = useContext(AppContext);

  return (
    <Router>
      <ScrollToTop>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            {resultsArray.length > 0 ? (
              <Route path="/results" element={<ResultsPage />}>
                {resultsArray.reverse().map((key) => {
                  return <Route key={key} path={key} element={<ItemList items={searchResults[key].items} itemTypes={key} />} />;
                })}
              </Route>
            ) : (
              <Route path="/results/tracks" element={<LoadingPage />} />
            )}
            <Route path="/album/:artist/:name" element={<AlbumDetailsPage />} />
            <Route path="/artist/:name" element={<ArtistDetailsPage />} />
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </main>
      </ScrollToTop>
    </Router>
  );
}
