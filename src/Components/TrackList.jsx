import Track from "./Track";
import React from "react";

class TrackList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tracks.map((track) => {
          return (
            <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
