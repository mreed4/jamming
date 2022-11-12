import "./Playlist.css";

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="{'New PLaylist'}" />
      {/* Add a TrackList component */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
