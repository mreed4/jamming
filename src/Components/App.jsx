import { AppProvider } from "../AppContext";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";

export default function App() {
  return (
    <AppProvider>
      <main>
        <h1>Audiofile</h1>
        <SearchBar />
        <div>
          <SearchResults />
          {/* <Playlist /> */}
        </div>
      </main>
    </AppProvider>
  );
}
