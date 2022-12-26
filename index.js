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

app.get("/hello/:ID", (req, res) => {
  data = req.params;
  res.send({ status: 200, message: "Hello, " + data.ID });
});

app.get("/search", (req, res) => {
  const search = req.query.s;
  if (typeof search == "undefined" || search === "") {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  } else {
    res.send({ status: 200, message: "ok", data: search });
  }
});
app.listen(path, () => {
  console.log(`the app listening on path at http://localhost:${path}`);
});
