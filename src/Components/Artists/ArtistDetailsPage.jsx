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
      console.log(data.items.sort((a, b) => b.release_date - a.release_date));
      setArtistAlbums(data.items.reverse());
      // console.log(artistAlbums);
    });
  }, []);

  return (
    <section id="artist-details">
      <h2>{artist.name}</h2>
      <section id="artist-albums" className="item-list">
        <h3>Albums</h3>
        <ArtistAlbumsList artist={artist} albumType="album" />
        <h3>Singles</h3>
        <ArtistAlbumsList artist={artist} albumType="single" />
      </section>
    </section>
  );
}
