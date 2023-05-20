import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";
import AlbumListItemContents from "./AlbumListItemContents";

export default function AlbumListItem({ album, itemType }) {
  const { toKebabCase } = useContext(AppContext);

  return (
    <Link to={`/album/${toKebabCase(album.artists[0].name)}/${toKebabCase(album.name)}`} state={album}>
      <AlbumListItemContents album={album} itemType={itemType} />
    </Link>
  );
}
