import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import AlbumTitle from "./AlbumTitle";

export default function AlbumListItemContents({ album, itemType, elementType, showArtist = true }) {
  const { parseArtists, placeholderImage } = useContext(AppContext);

  const src = album.images[1]?.url ?? placeholderImage;

  return (
    <div className="album-item list-image">
      <div className="album-info">
        <AlbumTitle album={album} elementType={elementType} />
        <div>
          {showArtist && <span className={album.artists.length > 1 ? "multi-artist" : ""}>{parseArtists(album.artists)}</span>}
          <span className="italic">{album.release_date.slice(0, 4)}</span>
        </div>
      </div>
      <img src={src} className="album-image" alt={album.name} title={album.name} />
    </div>
  );
}
