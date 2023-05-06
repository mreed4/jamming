import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Spotify from "../util/Spotify";

export default function AlbumDetailsPage() {
  const location = useLocation();
  const { state } = location;
  const { type } = state;

  const { parseArtists, albumTracks, setAlbumTracks, parseTrackTitle, addLeadingZero, toMinutesAndSeconds } = useContext(AppContext);

  useEffect(() => {
    setAlbumTracks([]);
    if (!state) return;
    if (type === "album") {
      Spotify.getAlbumTracks(state.id)
        .then((state) => {
          setAlbumTracks(state.items);
        })
        .catch((err) => console.error(err));
    }
    if (type === "track") {
      Spotify.getAlbumTracks(state.album.id)
        .then((state) => {
          setAlbumTracks(state.items);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <section id="album-details">
      <div className="album-image-and-tracks">
        <div>
          <img src={type === "track" ? state.album.images[0].url : state.images[0].url} className="album-image" />
          <h2>{type === "track" ? state.album.name : state.name}</h2>
          <h3>{parseArtists(state.artists)}</h3>
        </div>
        <ol className="album-track-list">
          {albumTracks.map((track, i) => {
            return (
              <li key={track.id} className="album-track">
                <span>
                  {addLeadingZero(i + 1)} {parseTrackTitle(track.name, true)}
                </span>
                <span className="dim">{toMinutesAndSeconds(track.duration_ms)}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
