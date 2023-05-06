import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";

export default function ArtistAlbumsList({ artist }) {
  const { toKebabCase, artistAlbums } = useContext(AppContext);
  return (
    <ol className="artist-albums-list">
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
  );
}
