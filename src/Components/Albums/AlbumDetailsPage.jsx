import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../Wrappers/AppContext";
import Spotify from "../../util/Spotify";
import AlbumTrackList from "./AlbumTrackList";

export default function AlbumDetailsPage() {
  const location = useLocation();
  const { state } = location;
  const { type } = state;

  const { parseArtists, setAlbumTracks } = useContext(AppContext);

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
          <h3>{type === "track" ? parseArtists(state.album.artists) : parseArtists(state.artists)}</h3>
        </div>
        <AlbumTrackList type={type} state={state} />
      </div>
    </section>
  );
}
