const express = require("express");
const app = express();
const path = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./database").connect();
app.use(bodyParser.json());

//importing the Routes
const moviesRoutes = require("./myroutes/movies.js");
app.use("/movies", moviesRoutes);
require("./database").connect();
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

//say hello
app.get("/hello/:ID", (req, res) => {
  data = req.params;
  res.send({ status: 200, message: "Hello, " + data.ID });
});

//search
app.get("/search", (req, res) => {
  const search = req.query.s;
  if (typeof search == undefined || search === "") {
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
  { title: "Cruella", year: 2021, rating: 7.3, genre: "Comedy/Crime", id: 1 },
  { title: "Aquaman", year: 2019, rating: 7.8, genre: "action", id: 2 },
  { title: "Spider-Man", year: 2019, rating: 8, genre: "action", id: 3 },
  {
    title: "Enola Holmes1",
    year: 2020,
    rating: 8,
    genre: "Mystery/Crime",
    id: 4,
  },
  {
    title: "Enola Holmes2",
    year: 2022,
    rating: 9,
    genre: "Mystery/Crime",
    id: 5,
  },
];

app.listen(path, () => {
  console.log(`the app listening on path at http://localhost:${path}`);
});
