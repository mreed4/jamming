import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export default function AlbumItem({ album, itemType }) {
  const { parseArtists, toKebabCase, albumIsSingleOrCompilation, parseAlbumTitle, placeholderImage } = useContext(AppContext);

  const src = album.images[1]?.url ?? placeholderImage;

  return (
    <Link to={`/album/${toKebabCase(album.artists[0].name)}/${toKebabCase(album.name)}`} state={album}>
      <div className="album-item list-image">
        <div className="album-info">
          <div>
            <span className="album-title">{parseAlbumTitle(album.name)}</span>
            <span>{albumIsSingleOrCompilation(album)}</span>
          </div>
          <div>
            <span className={album.artists.length > 1 ? "multi-artist" : ""}>{parseArtists(album.artists, itemType)}</span>
            <span className="italic">{album.release_date.slice(0, 4)}</span>
          </div>
        </div>
        <img src={src} className="album-image" alt={album.name} title={album.name} />
      </div>
    </Link>
  );
}
