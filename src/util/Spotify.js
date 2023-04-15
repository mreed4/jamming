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
        if (data.access_token) {
          console.log(data);
          return data.access_token;
        }
        throw new Error("Request for access token failed");
      });
  },

  search(term) {},
}; // Object

export default Spotify;
