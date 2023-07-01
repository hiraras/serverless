const http = require("http");

export default async function handler(req, res) {
  const options = {
    hostname: "mcs.snssdk.com",
    path: "/list",
    method: "POST",
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
    res.status(5001).send("Error");
  });

  request.end();
}
