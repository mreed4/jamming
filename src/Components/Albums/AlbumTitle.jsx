import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";

export default function AlbumTitle({ album, track, elementType = "h2" }) {
  const { parseAlbumTitle, toKebabCase } = useContext(AppContext);

  if (elementType === "h2") {
    return (
      <h2 className="album-title">
        <>{parseAlbumTitle(album.name)}</>
      </h2>
    );
  }

  if (elementType === "h4") {
    return (
      <h4 className="album-title">
        <>{parseAlbumTitle(album.name, true, false)}</>
      </h4>
    );
  }

  if (elementType === "p") {
    return (
      <p className="italic album-name">
        <Link to={`/album/${toKebabCase(track.album.artists[0].name)}/${toKebabCase(track.album.name)}`} state={track}>
          <>{parseAlbumTitle(track.album.name)}</>
        </Link>
      </p>
    );
  }
}
