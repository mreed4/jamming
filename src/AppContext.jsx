import { createContext, useState } from "react";
import Spotify from "./util/Spotify";

const AppContext = createContext();

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTermPersist, setSearchTermPersist] = useState("");
  const [albumTracks, setAlbumTracks] = useState([]);

  const resultsArray = Object.keys(searchResults).reverse();
  const placeholderImage = "https://placehold.co/600/191414/white@2x?text=No+Image";

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

  function truncateString(str, num = 35) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  function parseTrackTitle(title, enableTags = true) {
    // This will add a <span> tag around the first part of the title, and a <span> tag with a class of "track-title-tags" around the second part of the title.
    // This is so that the second part of the title can be styled differently.
    if (title.includes(" - ") && enableTags) {
      let parts = title.split(" - ");
      return parts.map((part, i) => {
        const key = `${part}-${i}`;
        if (i === 0) {
          return <span key={key}>{truncateString(part)}</span>;
        } else {
          return (
            <span key={key} className="track-title-tags">
              {truncateString(part, 20)}
            </span>
          );
        }
      });
    }
    return truncateString(title);
  }

  function parseAlbumTitle(title, enableTags = true) {
    if (title.includes("(") && enableTags) {
      let parts = title.split(" (");
      return parts.map((part, i) => {
        const key = `${part}-${i}`;
        if (i === 0) {
          return <span key={key}>{truncateString(part, 22)}</span>;
        } else {
          return (
            <span key={key} className="album-title-tags-wrap">
              <span className="album-title-tags">{truncateString(part.slice(0, -1), 22)}</span>
            </span>
          );
        }
      });
    }
    return truncateString(title, 22);
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
      .replaceAll("-", "")
      .trim()
      .split(" ")
      .map((word) => word.replace(/[^a-z0-9]/gi, ""))
      .join("-");
  }

  function albumIsSingleOrCompilation(album) {
    if (album.album_type === "single" || album.album_type === "compilation") {
      return <span className="album-type">{toProperCase(album.album_type)}</span>;
    }
    return;
  }

  function toProperCase(str) {
    let lower = str.toLowerCase().trim();
    return lower[0].toUpperCase() + lower.slice(1);
  }

  function addLeadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  function toMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${addLeadingZero(seconds)}`;
  }

  const value = {
    /* 
    States 
    */
    searchTerm,
    searchResults,
    playlistName,
    playlistTracks,
    searchTermPersist,
    albumTracks,
    setAlbumTracks,
    /* 
    Globals 
    */
    resultsArray,
    placeholderImage,
    /* 
    Spotify related 
    */
    addTrack,
    removeTrack,
    updatePlaylistName,
    savePlaylist,
    handleSearchTermChange,
    searchSpotify,
    /* 
    Helpers 
    */
    getClassName,
    parseTrackTitle,
    parseAlbumTitle,
    parseArtists,
    toKebabCase,
    albumIsSingleOrCompilation,
    toProperCase,
    addLeadingZero,
    truncateString,
    toMinutesAndSeconds,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppProvider };
