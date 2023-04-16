export default function Track() {
  function renderAction() {
    if (this.props.isRemoval) {
      return <button onClick={this.removeTrack}>-</button>;
    } else {
      return <button onClick={this.addTrack}>+</button>;
    }
  }

  function addTrack() {
    this.props.onAdd(this.props.track);
  }

  function removeTrack() {
    this.props.onRemove(this.props.track);
  }

  return (
    <div>
      <img src={this.props.track.albumArt} />
      <div>
        <h3>{this.props.track.name}</h3>
        <p>
          {this.props.track.artist} | {this.props.track.album}
        </p>
      </div>
      {this.renderAction()}
    </div>
  );
}
