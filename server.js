const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 3000;

const movieRouter = require("./routes/movieRoutes");
app.use(movieRouter);

// connect to DB
mongoose
  .connect(
    process.env.DB_SETTINGS
  )
  .then(() => console.log("Sucssess connecting DB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server running");
});
