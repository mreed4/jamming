// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { BASE_URL, TOKEN } = process.env;
  const { term } = event.queryStringParameters;

  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    const params = new URLSearchParams({ type: "track,artist,album", market: "us", q: term });

    const response = await fetch(`${BASE_URL}/search?${params}`, options);
    const data = await response.json();

    if (data) {
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    }
    throw new Error("Request for access token failed");
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
