const http = require("http");
const axios = require("axios");

export default async function handler(req, res) {
  // const response = await axios.get(
  //   "https://api.twitter.com/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1688095059&oauth_nonce=esEH0AtOw3w&oauth_version=1.0&oauth_signature=BpHxvHnZXap4b4YlODAsYzBbSr0%3D"
  // );
  const response = await axios.post(
    "https://api.meet48.xyz/wallet/api/v1/user/getPublicKey"
  );

  res.json(response.data);

  // const options = {
  //   hostname: "https://api.meet48.xyz",
  //   path: "/wallet/api/v1/user/getPublicKey",
  //   method: "POST",
  // };
  // // const options = {
  // //   hostname: "api.twitter.com",
  // //   path: "/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1688095059&oauth_nonce=esEH0AtOw3w&oauth_version=1.0&oauth_signature=BpHxvHnZXap4b4YlODAsYzBbSr0%3D",
  // //   method: "GET",
  // // };

  // // 发送请求
  // const request = http.request(options, (response) => {
  //   let data = "";

  //   response.on("data", (chunk) => {
  //     data += chunk;
  //   });

  //   response.on("end", () => {
  //     res.send(data);
  //   });
  // });

  // request.on("error", (error) => {
  //   console.error(error);
  //   res.status(5001).send("Error");
  // });

  // request.end();
}
