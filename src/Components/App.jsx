import { AppProvider } from "../AppContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <main>
          <h1>Audiofile</h1>
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/results" element={<SearchResults />} />
            {/* <Route path="/playlist" element={<Playlist />} /> */}
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}
