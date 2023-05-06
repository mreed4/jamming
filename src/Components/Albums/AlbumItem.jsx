import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";
import AlbumItemContents from "./AlbumItemContents";

export default function AlbumItem({ album, itemType }) {
  const { toKebabCase } = useContext(AppContext);

  return (
    <Link to={`/album/${toKebabCase(album.artists[0].name)}/${toKebabCase(album.name)}`} state={album}>
      <AlbumItemContents album={album} itemType={itemType} />
    </Link>
  );
}
