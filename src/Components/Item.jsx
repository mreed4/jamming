import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Item({ item, itemType }) {
  const { parseItemTitle, parseArtists } = useContext(AppContext);
  const placeholderImage = "https://placehold.co/600/191414/white@2x?text=No+Image";

  function renderAction() {
    if (this.props.isRemoval) {
      return <button onClick={this.removeTrack}>-</button>;
    } else {
      return <button onClick={this.addTrack}>+</button>;
    }
  }

  function addTrack() {
    this.props.onAdd(this.props.item);
  }

  function removeTrack() {
    this.props.onRemove(this.props.item);
  }

  if (itemType === "track") {
    const src = item.album.images[1]?.url ?? placeholderImage;
    return (
      <div className="track-item">
        <img src={src} className="album-image small" />
        <div className="track-info">
          <h3>{parseItemTitle(item.name)}</h3>
          <p className="italic dim">{parseArtists(item.artists)}</p>
          <p className="italic dim">{item.album.name}</p>
        </div>
        {/* {this.renderAction()} */}
      </div>
    );
  }

  if (itemType === "artist") {
    const src = item.images[0]?.url ?? placeholderImage;
    return (
      <div className="artist-item list-image">
        <img src={src} className="artist-image" />
      </div>
    );
  }

  if (itemType === "album") {
    return (
      <div className="album-item list-image">
        <div className="album-info">
          <span>{item.name}</span>
          <div>
            <span>{parseArtists(item.artists)}</span>
            <span>{item.release_date.slice(0, 4)}</span>
          </div>
        </div>
        <img src={item.images[1].url} className="album-image" alt={item.name} title={item.name} />
      </div>
    );
  }
}
