import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../Wrappers/AppContext";
import Spotify from "../../util/Spotify";
import AlbumTrackList from "./AlbumTrackList";
import AlbumTitle from "./AlbumTitle";

export default function AlbumDetailsPage() {
  const location = useLocation();
  const { state } = location;
  const { type } = state;
  // console.log(state);

  const { parseArtists, parseAlbumTitle, albumType, setAlbumTracks } = useContext(AppContext);

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
      <div>
        <img src={type === "track" ? state.album.images[0].url : state.images[0].url} className="album-image" />
        {type === "track" && <AlbumTitle album={state.album} elementType="h2" />}
        {type === "album" && <AlbumTitle album={state} elementType="h2" />}
        <h3>{type === "track" ? parseArtists(state.album.artists) : parseArtists(state.artists)}</h3>
      </div>
      <AlbumTrackList type={type} state={state} />
    </section>
  );
}
