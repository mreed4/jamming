import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Spotify from "../util/Spotify";

export default function AlbumDetailsPage() {
  const location = useLocation();
  const { state: album } = location;

  const { parseArtists } = useContext(AppContext);
  // console.log(album);

  useEffect(() => {
    Spotify.getAlbumTracks(album.id).then((album) => {
      console.log(album);
    });
  }, []);

  return (
    <section className="album-details">
      <h2>{album.name}</h2>
      <h3>{parseArtists(album.artists)}</h3>
    </section>
  );
}
