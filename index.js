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
//movie read
app.get("/movies/read", (req, res) => {
  data = req.params;
  res.json({ status: 200, data: movies });
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
app.get("/movies/delete/:ID", (req, res) => {
  data = req.params;
  var found = false;
  for (var i = 0; i < movies.length; i++) {
    if (data.ID == movies[i].id) {
      found = true;
      var index = i;
    }
  }
  if (found) {
    movies.splice(index, 1);
    res.send({ status: 200, data: movies });
  } else {
    res.send({
      status: 404,
      error: true,
      message: `the movie ${data.ID} does not exist`,
    });
  }
});

//movies add
app.get("/movies/add", (req, res) => {
  let title1 = req.query.title;
  let year1 = req.query.year;
  let rating1 = req.query.rating || 4;
  if (
    title1 === "" ||
    title1 !== undefined ||
    typeof year1 == number ||
    year1.toString().length === 4 ||
    (year1 >= 2000 && year1 <= 2023)
  ) {
    movies.push({ title1, year1, rating1 });
    res.send({
      status: 200,
      data: movies,
    });
  } else {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  }
});

//movies edit
app.get("/movies/edit", (req, res) => {});
//movies get
app.get("/movies/get", (req, res) => {});

app.get("/movies/read/by-date", (req, res) => {
  res.send({
    status: 200,
    //"the list of movies order it by year release  ",
    data: movies.sort((d1, d2) => !d1.year - d2.year),
  });
});

app.get("/movies/read/by-rating", (req, res) => {
  res.send({
    //the list of movies  start from hight rating
    status: 200,
    data: movies.sort((r1, r2) => !r1.rating - r2.rating),
  });
});

app.get("/movies/read/by-title", (req, res) => {
  moviestitle = movies.sort((t1, t2) => {
    //the list of movies  sort by alphabet order

    if (t1.title < t2.title) {
      return -1;
    }
    if (t1.title > t2.title) {
      return 1;
    }
    return 0;
  });
  res.send({
    status: 200,
    data: moviestitle,
  });
});

app.get("/movies/read/id/:ID", function (req, res) {
  let { ID } = req.params;
  let movie = movies.find((item) => item.id == ID);
  let showmovie = "";
  if ((showmovie = movie)) {
    res.send({ status: 200, data: movie });
  } else {
    showmovie != movie;
    return res.json({
      status: 404,
      error: true,
      message: "the movie ID does not exist",
    });
  }
});

app.listen(path, () => {
  console.log(`the app listening on path at http://localhost:${path}`);
});
