import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";
import AlbumListItemContents from "../Albums/AlbumListItemContents";

export default function ArtistAlbumsList({ albumType, isLive, isDeluxe }) {
  const { toKebabCase, artistAlbums } = useContext(AppContext);

  if (!isLive && !isDeluxe) {
    return (
      <ol id="artist-albums-list" className="item-list albums-list">
        {artistAlbums
          .filter(
            (album) =>
              album.album_type === albumType &&
              album.name.toLowerCase().includes("deluxe") === isDeluxe &&
              album.name.toLowerCase().includes("live") === isLive
          )
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
  } else if (isLive) {
    return (
      <ol id="artist-albums-list" className="item-list albums-list">
        {artistAlbums
          .filter((album) => album.album_type === albumType && album.name.toLowerCase().includes("live") === isLive)
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
  } else if (isDeluxe) {
    return (
      <ol id="artist-albums-list" className="item-list albums-list">
        {artistAlbums
          .filter((album) => album.album_type === albumType && album.name.toLowerCase().includes("deluxe") === isDeluxe)
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
  } else {
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
}
