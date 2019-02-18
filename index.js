const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();

// Mongodb connection
mongoose.connect('mongodb://localhost:27017/Ballus_demo');

mongoose.connection.on('connected', () => {
    console.log('Connected mongodb @ 27017');
});

mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in database connection: ', err);
    }
});

// Port #
const port = 3000;

// Middleware
app.use(cors());

// Body parser
app.use(bodyparser());

// Routing
app.use('/api/route', require('./Routes/route'));
app.use('/api/dashboard', require('./Routes/dashboard'));


app.listen(port, () => {
    console.log('Server started at port: ', port);
});