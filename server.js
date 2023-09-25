const fs = require("fs");
const https = require("https");
const express = require("express");
const app = express();

app.use("/static", express.static("public"));

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert"),
    },
    app
  )
  .listen(3000, () => {
    console.log("Server running at https://localhost:3000/");
  });
