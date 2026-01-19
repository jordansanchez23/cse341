/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const mongoDb = require('./data/database');
const bodyParser = require('body-parser');
const app = express ();

/* ***********************
 * Local Server Information
 *************************/
port = process.env.PORT || 3000;


/* ***********************
 * Middleware
 *************************/
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-width, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

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



