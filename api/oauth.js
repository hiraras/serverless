const http = require("http");

export default async function handler(req, res) {
  const options = {
    hostname: "api.meet48.xyz",
    path: "/wallet/api/v1/user/getPublicKey",
    method: "POST",
  };
  // const options = {
  //   hostname: "api.twitter.com",
  //   path: "/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1688198114&oauth_nonce=Uallw22Iqu9&oauth_version=1.0&oauth_signature=UAyrbRyY2y1lsY98VFmt7JA1GGE%3D",
  //   method: "POST",
  // };

  // 发送请求
  const request = http.request(options, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      res.send(data);
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(5001).send("Error");
  });

  request.end();
}
