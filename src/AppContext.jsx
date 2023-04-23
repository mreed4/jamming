import { createContext, useState } from "react";
import Spotify from "./util/Spotify";

const AppContext = createContext();

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTermPersist, setSearchTermPersist] = useState("");

  const resultsArray = Object.keys(searchResults).reverse();

  function addTrack(track) {
    let tracks = playlistTracks;

    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    setPlaylistTracks(tracks);
  }

  function removeTrack(track) {
    let tracks = playlistTracks;

    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    setPlaylistTracks(tracks);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName(playlistName);
      setPlaylistTracks([]);
    });
  }

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function searchSpotify() {
    Spotify.search(searchTerm).then((data) => {
      console.log(data);
      setSearchResults(data);
    });
    setSearchTermPersist(searchTerm);
    setSearchTerm("");
    setSearchResults({});
  }

  function getClassName({ isActive }) {
    return isActive ? "active" : "";
  }

  function parseItemTitle(title) {
    if (title.includes(" - ")) {
      let parts = title.split(" - ");
      return parts.map((part, i) => {
        const key = `${part}-${i}`;
        if (i === 0) {
          return <span key={key}>{part}</span>;
        } else {
          return (
            <span key={key} className="track-title-tags">
              {part}
            </span>
          );
        }
      });
    }
    return title;
  }

  const value = {
    searchTerm,
    searchResults,
    playlistName,
    playlistTracks,
    resultsArray,
    searchTermPersist,
    addTrack,
    removeTrack,
    updatePlaylistName,
    savePlaylist,
    handleSearchTermChange,
    searchSpotify,
    getClassName,
    parseItemTitle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
