import config from "./config";
const { key: API_KEY, secret: SECRET } = config;

const Spotify = {
  requestAccessToken() {
    const url = "https://accounts.spotify.com/api/token";
    const body = `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`;
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    return fetch(url, { method: "POST", body, headers })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // console.log(data.access_token);
          return data.access_token;
        }
        throw new Error("Request for access token failed");
      });
  },

  search(term) {
    return Spotify.requestAccessToken().then((ACCESS_TOKEN) => {
      const url = `https://api.spotify.com/v1/search?type=track,artist,album&q=${term}`;
      const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };

      return fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (!data) {
            return {};
          }
          // console.log(data.tracks.items);
          return data;
        });
    });
  },

  getAlbumTracks(albumId) {
    return Spotify.requestAccessToken().then((ACCESS_TOKEN) => {
      const url = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
      const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };

      return fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (!data) {
            return {};
          }
          // console.log(data.tracks.items);
          return data;
        });
    });
  },

  getArtistAlbums(artistId) {
    return Spotify.requestAccessToken().then((ACCESS_TOKEN) => {
      const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
      const headers = { Authorization: `Bearer ${ACCESS_TOKEN}` };

      return fetch(url, { headers })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          if (!data) {
            return {};
          }
          // console.log(data.tracks.items);
          return data;
        });
    });
  },
};

export default Spotify;
