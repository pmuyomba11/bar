const express = require('express');
require('dotenv').config();
const colors = require('colors');
const drinks = require('./models/drinks');
const foods = require('./models/foods')
const morgan = require('morgan');
const PORT = process.env.PORT;
//Initialization.....
const app = express();

//Middleware....
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//Routes....
//Index Route...
app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        allDrinks : drinks
    })
})

app.get('/foods', (req, res) => {
    res.render('food_index.ejs', {
        allFoods : foods
    })
})

//Show Route...
app.get('/drinks/:id', (req, res) => {
    res.render('show.ejs', {
        drink : drinks[req.params.id]
    })
})

app.get('/foods/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: foods[req.params.id]
    })
})

//Listening.....
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on PORT: ${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})
