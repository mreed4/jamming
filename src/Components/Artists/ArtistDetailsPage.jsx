import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../Wrappers/AppContext";
import Spotify from "../../util/Spotify";
import ArtistAlbumsList from "./ArtistAlbumsList";

export default function ArtistDetailsPage() {
  // return <h2>ArtistDetailsPage</h2>;
  const location = useLocation();
  const { state: artist } = location;

  const { setArtistAlbums } = useContext(AppContext);

  useEffect(() => {
    if (!artist) return;
    setArtistAlbums([]);
    Spotify.getArtistAlbums(artist.id).then((data) => {
      setArtistAlbums(data.items);
      // console.log(artistAlbums);
    });
  }, []);

  return (
    <section id="artist-details">
      <h2>{artist.name}</h2>
      <h3>Albums</h3>
      <ArtistAlbumsList artist={artist} />
    </section>
  );
}
