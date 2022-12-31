const mongoose = require("mongoose");
const uri ="mongodb+srv://fatinooo:f2o@cluster0.dlkziyp.mongodb.net/?retryWrites=true&w=majority";

exports.connect = () => {
    // Connecting to the database
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((error) => {
        console.log("error , connection failed");
        console.error(error);
        process.exit(1);
      });
  };