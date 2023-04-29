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
    // This will add a <span> tag around the first part of the title, and a <span> tag with a class of "track-title-tags" around the second part of the title.
    // This is so that the second part of the title can be styled differently.
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

  function parseArtists(artists, itemType = "track") {
    if (itemType === "track") {
      return artists.map((artist) => {
        return (
          <span key={artist.id} className="artist-name">
            {artist.name}
          </span>
        );
      });
    }

    if (itemType === "album") {
      if (artists.length > 1) {
        return (
          <>
            <span>{artists[0].name}</span> <span className="artist-count">+{artists.length - 1}</span>
          </>
        );
      }
      return <>{artists[0].name}</>;
    }
  }

  function toKebabCase(str) {
    return str
      .toLowerCase()
      .trim()
      .split(" ")
      .map((word) => word.replace(/[^a-z0-9]/gi, ""))
      .join("-");
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
    parseArtists,
    toKebabCase,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
