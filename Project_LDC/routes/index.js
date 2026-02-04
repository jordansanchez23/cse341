const router = require('express').Router();
const passport = require("passport");

router.use('/', require('./swagger'));

router.use("/jobs", require("./jobs"));

router.use("/methods", require("./methods"));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        req.session.user = undefined
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;