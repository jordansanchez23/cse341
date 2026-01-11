/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const mongoDb = require('./data/database');
const app = express ();


/* ***********************
 * Local Server Information
 *************************/
port = process.env.PORT || 3000;


/* ***********************
 * Middleware
 *************************/
app.use('/', require('./routes'));

/* ***********************
 * Log statement to confirm Database & server operation
 *************************/
mongoDb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
    console.log(`Database is listening and node Running on port ${port}`)
        });
    }
});



