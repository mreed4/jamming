import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import Spotify from "../util/Spotify";

export default function ArtistDetailsPage() {
  // return <h2>ArtistDetailsPage</h2>;
  const location = useLocation();
  const { state } = location;

  // const { parseArtists, albumTracks, setAlbumTracks, parseTrackTitle, addLeadingZero, toMinutesAndSeconds } = useContext(AppContext);

  // useEffect(() => {
  //   setAlbumTracks([]);
  //   if (!state) return;
  //   if (state.type === "album") {
  //     Spotify.getAlbumTracks(state.id)
  //       .then((state) => {
  //         setAlbumTracks(state.items);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  //   if (state.type === "track") {
  //     Spotify.getAlbumTracks(state.album.id)
  //       .then((state) => {
  //         setAlbumTracks(state.items);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }, []);

  return (
    <section id="artist-details">
      <h2>{state.name}</h2>
    </section>
  );
}
