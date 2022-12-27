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

const movies = [
  { title: "Cruella", year: 2021, rating: 7.3, genre: "Comedy/Crime" },
  { title: "Aquaman", year: 2019, rating: 7.8, genre: "action" },
  { title: "Spider-Man", year: 2019, rating: 8, genre: "action" },
  { title: "Enola Holmes1", year: 2020, rating: 8, genre: "Mystery/Crime" },
  { title: "Enola Holmes2", year: 2022, rating: 9, genre: "Mystery/Crime" },
];
//movie read
app.get("/movies/read", (req, res) => {
  data = req.params;
  res.json({ status: 200, data:movies});
});

//movie creat
app.get("/movies/create", (req, res) => {
  res.send({ message: "Hello" });
});

//movie update
app.get("/movies/update", (req, res) => {
  res.send({ message: "Hello, " });
});

//movie delete
app.get("/movies/delete", (req, res) => {});

//movies add
app.get("/movies/add", (req, res) => {});

//movies edit
app.get("/movies/edit", (req, res) => {});
//movies get
app.get("/movies/get", (req, res) => {});

app.listen(path, () => {
  console.log(`the app listening on path at http://localhost:${path}`);
});
