const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    review: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("not exist minus reviews");
        },
    },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
