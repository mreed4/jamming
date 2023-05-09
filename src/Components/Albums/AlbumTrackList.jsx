import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";

export default function AlbumTrackList({ type: inboundItemType, state }) {
  const { albumTracks, parseTrackTitle, parseArtists, addLeadingZero, toMinutesAndSeconds } = useContext(AppContext);

  const isTrack = inboundItemType === "track";
  const isAlbum = inboundItemType === "album";
  const isCompilation = (isTrack && state.album.album_type === "compilation") || (isAlbum && state.album_type === "compilation");

  return (
    <ol className="album-track-list">
      {albumTracks.map((track, i) => {
        const isMultiArtist =
          (isTrack && isCompilation && !track.artists.map((artist) => artist.name).includes(state.album.artists[0].name)) ||
          (isAlbum && isCompilation && !track.artists.map((artist) => artist.name).includes(state.artists[0].name));

        return (
          <li key={track.id} className="album-track">
            <div className="album-track-number-info-wrapper">
              <span>
                <span className="album-track-number">{addLeadingZero(i + 1)}</span>
              </span>
              <div className="album-track-name-artist">
                <h4>{parseTrackTitle(track.name, true)}</h4>
                {isMultiArtist && <span className="dim compilation-artist">{parseArtists(track.artists)}</span>}
              </div>
            </div>
            <span className="dim">{toMinutesAndSeconds(track.duration_ms)}</span>
          </li>
        );
      })}
    </ol>
  );
}
