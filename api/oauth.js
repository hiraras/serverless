const axios = require("axios");

export default async function handler(req, res) {
  const response = await axios.get(
    "https://api.twitter.com/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1687941198&oauth_nonce=MHmqnhbbTIS&oauth_version=1.0&oauth_signature=05ldMLLPLow5tNU9lNifQvg7qKM%3D"
  );

  res.json(response.data);
}
