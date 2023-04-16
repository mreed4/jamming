import Track from "./Track";

export default function TrackList({ tracks }) {
  return (
    <div>
      {tracks.map((track) => {
        return <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />;
      })}
    </div>
  );
}
