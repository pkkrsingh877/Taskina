const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// middlewares
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('tiny'));

// ejs and ejs-mate setup
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// setting up mongodb 
mongoose.connect('mongodb://localhost:27017/taskina' || process.env.MONGO_URI)
    .then(() => {
        console.log("Connection Successful!");
    })
    .catch((err) => {
        console.log("Connection Failed!");
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('Simple Text');
});

app.listen(port, () => {
    console.log("App is listening on port", port);
});