export default function Item({ item, itemType }) {
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
      <div className="track">
        {/* <img src={this.props.item.albumArt} /> */}
        <div>
          <h3>{item.name}</h3>
          <p>
            {item.artists.map((artist) => {
              return <span key={artist.id}>{artist.name}</span>;
            })}
            {item.album.name}
          </p>
        </div>
        {/* {this.renderAction()} */}
      </div>
    );
  }

  if (itemType === "artist") {
    return (
      <div className="artist">
        <div>
          <img src={item.images[0]?.url ?? "https://placehold.co/600@2x?text=No+Image"} className="artist-image" />
        </div>
        <h3>{item.name}</h3>
      </div>
    );
  }

  if (itemType === "album") {
    return (
      <div className="album">
        <img src={item.images[1].url} className="album-image" />
      </div>
    );
  }
}
