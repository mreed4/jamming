import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";
import { Link } from "react-router-dom";
import AlbumTitle from "../Albums/AlbumTitle";

export default function TrackListItem({ track, itemType }) {
  const { parseArtists, parseTrackTitle, toKebabCase, albumType, placeholderImage } = useContext(AppContext);

  const src = track.album.images[1]?.url ?? placeholderImage;

  // function renderAction() {
  //   if (this.props.isRemoval) {
  //     return <button onClick={this.removeTrack}>-</button>;
  //   } else {
  //     return <button onClick={this.addTrack}>+</button>;
  //   }
  // }

  // function addTrack() {
  //   this.props.onAdd(this.props.item);
  // }

  // function removeTrack() {
  //   this.props.onRemove(this.props.item);
  // }

  // if (itemType === "track") {
  //   return <TrackItem track={item} itemType={itemType} />;
  // }

  return (
    <div className="track-item">
      <Link to={`/album/${toKebabCase(track.album.artists[0].name)}/${toKebabCase(track.album.name)}`} state={track}>
        <img src={src} className="album-image small" />
      </Link>
      <div className="track-info">
        <h3>{parseTrackTitle(track.name)}</h3>
        <p className="">{parseArtists(track.artists)}</p>
        <AlbumTitle track={track} elementType="p" />
      </div>
      {/* {this.renderAction()} */}
    </div>
  );
}
