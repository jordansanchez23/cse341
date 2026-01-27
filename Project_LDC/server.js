/********************
 * Require Statements
 ********************/
const express = require("express");
const mongoDb = require('./data/database');
const bodyParser = require('body-parser');
const app = express()


/* ***********************
 * Local Server Information
 *************************/
port = process.env.PORT = 5500;

/* ***********************
 * Middleware
 *************************/
app.use(bodyParser.json());

/* ***********************
 * Log statement to confirm Database & server operation
 *************************/
mongoDb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
    console.log(`Database is listening and node Running on port ${port}`);
        });
    }
});