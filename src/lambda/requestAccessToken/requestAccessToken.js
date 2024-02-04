// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { KEY, SECRET } = process.env;
  let TOKEN = process.env.TOKEN;
  const options = {
    method: "POST",
    body: `grant_type=client_credentials&client_id=${KEY}&client_secret=${SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // Authorization: `Basic ${process.env.SECRET}`,
    },
  };
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", options);

    const data = await response.json();

    TOKEN = data.access_token;

    if (data) {
      return {
        statusCode: 200,
        body: JSON.stringify({ access_token: data.access_token }),
      };
    }
    throw new Error("Request for access token failed");
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
