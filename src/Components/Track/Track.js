import React from "react";
import "./Track.css";

class Track extends React.Component {
  renderAction() {
    return this.props.isRemoval ? <button>-</button> : <button>+</button>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/* track name will go here */}</h3>
          <p>
            {/* track artist will go here */} | {/* track album will go here */}
          </p>
        </div>
      </div>
    );
  }
}

export default Track;
