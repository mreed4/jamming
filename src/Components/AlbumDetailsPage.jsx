import { useLocation, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Spotify from "../util/Spotify";

export default function AlbumDetailsPage() {
  const location = useLocation();
  const { state: album } = location;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { parseArtists, albumTracks, setAlbumTracks, parseTrackTitle, addLeadingZero, toMinutesAndSeconds } = useContext(AppContext);
  // console.log(album);

  useEffect(() => {
    setAlbumTracks([]);
    Spotify.getAlbumTracks(album.id).then((album) => {
      console.log(album);
      setAlbumTracks(album.items);
    });
  }, []);

  return (
    <section id="album-details">
      {/* <Link to={goBack}>Back</Link> */}
      <div className="album-image-and-tracks">
        <div>
          <img src={album.images[0].url} className="album-image" />
          <h2>{album.name}</h2>
          <h3>{parseArtists(album.artists)}</h3>
        </div>
        <ol className="album-track-list">
          {albumTracks.map((track, i) => {
            return (
              <li key={track.id} className="album-track">
                <span>
                  {addLeadingZero(i + 1)} {parseTrackTitle(track.name, true)}
                </span>
                <span className="dim">{toMinutesAndSeconds(track.duration_ms)}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
