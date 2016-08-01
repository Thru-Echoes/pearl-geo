var express = require('express');
var routerAlco = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAlco.get('/', function(req, res) {
    var renderObj = {
        title: "Alloglossidium Corti",
        clade: "Trematoda",
        source: "GBIF",
    };
    res.render('Alco', renderObj);
});

// Grab data from document
routerAlco.post('/', function(req, res) {

    res.end();
});

module.exports = routerAlco;
