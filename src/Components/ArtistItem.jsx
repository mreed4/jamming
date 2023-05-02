import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export default function TrackItem({ artist }) {
  const { placeholderImage } = useContext(AppContext);

  const src = artist.images[0]?.url ?? placeholderImage;

  return (
    <div className="artist-item list-image">
      <img src={src} className="artist-image" />
    </div>
  );
}
