import TrackList from "./TrackList";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function SearchResults() {
  const { searchResults } = useContext(AppContext);
  const { albums, artists, tracks } = searchResults;

  return (
    Object.keys(searchResults).length > 0 && (
      <div>
        <h2>Results</h2>
        <h3>{Object.keys(searchResults)[0][0].toUpperCase() + Object.keys(searchResults)[0].slice(1)}</h3>
        <ol>
          {tracks.items.map((track) => {
            return (
              <li key={track.uri}>
                <img src={track.album.images[1].url} alt={track.name} className="album" />
                {track.name} <br />
                {track.artists.map((artist) => artist.name).join(", ")} <br />
                {track.album.name} <br />
              </li>
            );
          })}
        </ol>
      </div>
    )
  );
}
