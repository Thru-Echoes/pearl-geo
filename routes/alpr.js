var express = require('express');
var routerAlpr = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlpr.get('/', function(req, res) {
    var renderObj = {
        title: "Alaimus primitivus",
        clade: "Nematoda",
        source: "GBIF",
    };
    res.render('Alpr', renderObj);
});

// Grab data from document
routerAlpr.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlpr;
