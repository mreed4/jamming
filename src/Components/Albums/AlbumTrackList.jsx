import { useContext } from "react";
import { AppContext } from "../Wrappers/AppContext";

export default function AlbumTrackList({ type: inboundItemType, state }) {
  const { albumTracks, parseTrackTitle, parseArtists, addLeadingZero, toMinutesAndSeconds } = useContext(AppContext);

  const isTrack = inboundItemType === "track";
  const isCompilation = isTrack && state.album.album_type === "compilation";

  return (
    <ol className="album-track-list">
      {albumTracks.map((track, i) => {
        const isMultiArtist = isCompilation && !track.artists.map((artist) => artist.name).includes(state.album.artists[0].name);

        return (
          <li key={track.id} className="album-track">
            <span>
              <span className="album-track-number">{addLeadingZero(i + 1)}</span>
              <span>{parseTrackTitle(track.name, true)}</span>
              {isMultiArtist && <span className="dim compilation-artist italic">{parseArtists(track.artists)}</span>}
            </span>
            <span className="dim">{toMinutesAndSeconds(track.duration_ms)}</span>
          </li>
        );
      })}
    </ol>
  );
}
