const express = require('express');
const app = express();
app.use(express.json());

const cors = require("cors");

require('dotenv').config();

app.use(cors());

const connectDB = require('./connectMongo');

connectDB();

const Movie = require('./models/movieModel');
const { trusted } = require('mongoose');

app.get('/api/movies', async (req, res) => {
    try {
        
        const data = await Movie.find().limit(20);
        return res.status(200).json({
            data
        })
    }
    catch(err) {
        return res.status(404).json({
            msg: err.message
        })
    }
})

app.listen(8080, () => {
    console.log('Server running');
})