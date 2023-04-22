import { createContext, useState } from "react";
import Spotify from "./util/Spotify";

const AppContext = createContext();

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

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

  function handleFormSubmit() {
    Spotify.search(searchTerm).then((data) => {
      console.log(data);
      setSearchResults(data);
    });
    setSearchTerm("");
  }

  const value = {
    searchTerm,
    searchResults,
    playlistName,
    playlistTracks,
    addTrack,
    removeTrack,
    updatePlaylistName,
    savePlaylist,
    handleSearchTermChange,
    handleFormSubmit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
