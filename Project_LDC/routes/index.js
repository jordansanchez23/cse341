const router = require('express').Router();

router.use('/', require('./swagger'));

router.use("/jobs", require("./jobs"));

router.use("/methods", require("./methods"));

module.exports = router;