const express = require("express");
const app = express();
const path = 3000;

app.get("/", (req, res) => {
  res.send("okay");
});

app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  const currenttime = new Date();
  const time = currenttime.getHours() + ":" + currenttime.getSeconds();
  res.send({ status: 200, message: time });
});

app.listen(path, () => {
  console.log(`the app listening on path at http://localhost:${path}`);
});
//add commit 
