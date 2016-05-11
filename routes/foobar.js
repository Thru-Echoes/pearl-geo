var express = require('express');
var routerFoobar = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn Foobarpop.js - in .post()\n");
})*/

routerFoobar.get('/', function(req, res) {
    console.log("\nIn foobar.js - in .get()\n");
    res.render('foobar', {
        title: "Species: Foo. Bar."
    });
});

// Grab data from document
routerFoobar.post('/', function(req, res) {

    res.end();
});

module.exports = routerFoobar;
