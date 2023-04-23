import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function Item({ item, itemType }) {
  const { parseItemTitle } = useContext(AppContext);
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
    return (
      <div className="track-item">
        <img src={item.album.images[1]?.url ?? placeholderImage} className="album-image small" />
        <div className="track-info">
          <h3>{parseItemTitle(item.name)}</h3>
          <p className="italic dim">
            {item.artists.map((artist) => {
              return (
                <span key={artist.id} className="artist-name">
                  {artist.name}
                </span>
              );
            })}
          </p>
          <p className="italic dim">{item.album.name}</p>
        </div>
        {/* {this.renderAction()} */}
      </div>
    );
  }

  if (itemType === "artist") {
    return (
      <div className="artist-item list-image">
        <img src={item.images[0]?.url ?? placeholderImage} className="artist-image" />
      </div>
    );
  }

  if (itemType === "album") {
    return (
      <div className="album-item list-image">
        <img src={item.images[1].url} className="album-image" />
      </div>
    );
  }
}
