import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";

export default function AlbumTitle({ album, track, elementType = "h2" }) {
  const { parseAlbumTitle, albumIsSingleOrCompilation, toKebabCase } = useContext(AppContext);

  if (elementType === "h2") {
    return (
      <h2 className="album-title">
        <>{parseAlbumTitle(album.name)}</>
        {(album.album_type === "single" || album.album_type === "compilation") && (
          <span style={{ display: "block" }}>{albumIsSingleOrCompilation(album)}</span>
        )}
      </h2>
    );
  }

  if (elementType === "p") {
    return (
      <p className="italic album-name">
        <Link to={`/album/${toKebabCase(track.album.artists[0].name)}/${toKebabCase(track.album.name)}`} state={track}>
          <>{parseAlbumTitle(track.album.name)}</>
          {(track.album.album_type === "single" || track.album.album_type === "compilation") && (
            <span style={{ display: "block" }}>{albumIsSingleOrCompilation(track.album)}</span>
          )}
        </Link>
      </p>
    );
  }
}
