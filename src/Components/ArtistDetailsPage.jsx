import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Spotify from "../util/Spotify";
// import AlbumItemContents from "./AlbumItemContents";

export default function ArtistDetailsPage() {
  // return <h2>ArtistDetailsPage</h2>;
  const location = useLocation();
  const { state: artist } = location;

  const { artistAlbums, setArtistAlbums, toKebabCase } = useContext(AppContext);

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
      <ol>
        {artistAlbums.map((album) => {
          return (
            <li key={album.id}>
              <Link to={`/album/${toKebabCase(artist.name)}/${toKebabCase(album.name)}`} state={album}>
                <img src={album.images[1].url} />
                {/* <AlbumItemContents album={album} itemType="album" /> */}
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
