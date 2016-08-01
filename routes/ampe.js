var express = require('express');
var routerAmpe = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmpe.get('/', function(req, res) {
    var renderObj = {
        title: "Amalaraeus penicilliger",
        clade: "Siphonaptera",
        source: "GBIF",
    };
    res.render('Ampe', renderObj);
});

// Grab data from document
routerAmpe.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmpe;
