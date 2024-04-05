const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema  = new Schema({
    _id: String,
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: [Schema.Types.Mixed],
    lastupdated: Date,
    year: Number,
    imdb: [Schema.Types.Mixed],
    countries: [String],
    type: String,
    tomatoes: [Schema.Types.Mixed],
    num_mflix_comments: Number
}); 

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;