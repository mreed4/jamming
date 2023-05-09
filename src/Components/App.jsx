import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";

import { AppContext } from "./Wrappers/AppContext";
import ScrollToTop from "./Wrappers/ScrollToTop";

import Header from "./Header";
import ItemLists from "./Results/ItemLists";
import SearchPage from "./Search/SearchPage";
import ResultsPage from "./Results/ResultsPage";
import LoadingPage from "./LoadingPage";
import AlbumDetailsPage from "./Albums/AlbumDetailsPage";
import ArtistDetailsPage from "./Artists/ArtistDetailsPage";
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
                  return <Route key={key} path={key} element={<ItemLists items={searchResults[key].items} itemTypes={key} />} />;
                })}
              </Route>
            ) : (
              <Route path="/results/tracks" element={<LoadingPage />} /> // This is the route location of useNavigate() in SearchForm.jsx
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
