/* ***********************
 * Require Statements
 *************************/
const express = require('express')
const app = express ()

/* ***********************
 * Middleware
 *************************/
app.use('/', require('./routes'));

/* ***********************
 * Local Server Information
 *************************/
port = process.env.PORT || 3000

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
    console.log(`Running on port ${port}`)
} )