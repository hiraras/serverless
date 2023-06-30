const express = require("express");
const axios = require("axios");

const app = express();
const port = 30001;

app.get("/", async (req, res) => {
  console.log("xxxxx");
  res.json({ route: "/" });
});

app.get("/oauth", async (req, res) => {
  try {
    res.json({ a: 1 });
    return;
    const response = await axios.get(
      "https://api.twitter.com/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1687941198&oauth_nonce=MHmqnhbbTIS&oauth_version=1.0&oauth_signature=05ldMLLPLow5tNU9lNifQvg7qKM%3D"
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(error?.response?.status || 500).json(error?.response?.data);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

/*
const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
  // 创建一个请求对象
  const options = {
    hostname: "api.twitter.com",
    port: 80,
    path: "/oauth/request_token?oauth_consumer_key=h8Pv7MaAptzKTtyml7Vag3WoO&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1687941198&oauth_nonce=MHmqnhbbTIS&oauth_version=1.0&oauth_signature=05ldMLLPLow5tNU9lNifQvg7qKM%3D",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // 设置代理选项
    proxy: "ws://hke.cloudv2a.com:443",
  };

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
    res.status(500).send("Error");
  });

  request.end();
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
*/
