import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";
import AlbumListItemContents from "../Albums/AlbumListItemContents";

export default function ArtistAlbumsList({ albumType }) {
  const { toKebabCase, artistAlbums } = useContext(AppContext);

  return (
    <ol id="artist-albums-list" className="item-list albums-list">
      {artistAlbums
        .filter((album) => album.album_type === albumType)
        .map((album) => {
          return (
            <li key={album.id}>
              <Link to={`/album/${toKebabCase(album.artists[0].name)}/${toKebabCase(album.name)}`} state={album}>
                {/* <img src={album.images[1].url} className="album-image" /> */}
                <AlbumListItemContents album={album} itemType="album" elementType="h4" showArtist={false} />
              </Link>
            </li>
          );
        })}
    </ol>
  );
}
