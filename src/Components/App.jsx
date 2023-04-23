import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import ItemList from "./ItemList";
import SearchPage from "./SearchPage";
import ResultsPage from "./ResultsPage";
import LoadingPage from "./LoadingPage";
import Playlist from "./Playlist";

export default function App() {
  const { searchResults, resultsArray } = useContext(AppContext);

  return (
    <Router>
      <main>
        <h1>Audiofile</h1>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          {resultsArray.length > 0 ? (
            <Route path="/results" element={<ResultsPage />}>
              {/* <Route path="" element={<LoadingPage />} /> */}
              {resultsArray.reverse().map((key) => {
                return <Route key={key} path={key} element={<ItemList items={searchResults[key].items} itemTypes={key} />} />;
              })}
            </Route>
          ) : (
            <Route path="/results/tracks" element={<LoadingPage />} />
          )}
          {/* <Route path="/playlist" element={<Playlist />} /> */}
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </main>
    </Router>
  );
}
