import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";

export default function AlbumItemContents({ album, itemType }) {
  const { parseArtists, albumIsSingleOrCompilation, parseAlbumTitle, placeholderImage } = useContext(AppContext);

  const src = album.images[1]?.url ?? placeholderImage;

  return (
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
  );
}
