var express = require('express');
var routerAbco = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbco.get('/', function(req, res) {
    res.render('abco', {
        title: "Species: Abbreviata confusa",
        clade: "Nematoda",
        source: "GBIF",
    });
});

// Grab data from document
routerAbco.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbco;
