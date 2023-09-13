const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
//Initialization.....
const app = express();



//Routes....


//Listening.....
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on PORT: ${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})
