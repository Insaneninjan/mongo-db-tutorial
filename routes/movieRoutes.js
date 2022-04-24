const express = require("express");
const app = express();
const movieModel = require("../models/Movie");

app.use(express.json());

// GET DB data
app.get("/movies", async(req, res) => {
    // return all data
    const movies = await movieModel.find({});

    try {
        res.send(movies);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// CREATE data
app.post("/movie", async(req, res) => {
    // return all data
    const movie = new movieModel(req.body);

    try {
        await movie.save();
        res.send(movie);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// UPDATE 部分修正 data
app.patch("/movie/:id", async(req, res) => {
    try {
        await movieModel.findByIdAndUpdate(req.params.id, req.body);
        await movieModel.save();
    }
    catch (err) {
        res.status(500).send(err);
    }
});

// DELETE data
app.delete("/movie/:id", async(req, res) => {
    try {
        await movieModel.findByIdAndDelete(req.params.id);
    }
    catch (err) {
        res.status(500).send(err);
    }
});


module.exports = app;
