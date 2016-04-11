var express = require('express');
var routerSobbat = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn metapop.js - in .post()\n");
})*/

routerSobbat.get('/', function(req, res) {
    console.log("\nIn sobbat.js - in .get()\n");
    res.render('sobbat', {
        title: "Species: Sob. Bat."
    });
});

// Grab data from document
routerSobbat.post('/', function(req, res) {

    res.end();
});

module.exports = routerSobbat;
