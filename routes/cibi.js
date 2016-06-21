var express = require('express');
var routerCibi = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

/*router.post('/', function(req, res) {
    req.locals.numClass = req.body.numClass;
    console.log("\nIn Cibipop.js - in .post()\n");
})*/

routerCibi.get('/', function(req, res) {
    res.render('cibi', {
        title: "Species: Citellinema bifurcatum"
    });
});

// Grab data from document
routerCibi.post('/', function(req, res) {

    res.end();
});

module.exports = routerCibi;
