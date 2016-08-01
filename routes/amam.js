var express = require('express');
var routerAmam = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmam.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Americanum",
        clade: "Ixodida",
        source: "GBIF USNPC",
    };
    res.render('Amam', renderObj);
});

// Grab data from document
routerAmam.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmam;
