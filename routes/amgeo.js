var express = require('express');
var routerAmgeo = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmgeo.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Geoemydae",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('amgeo', renderObj);
});

// Grab data from document
routerAmgeo.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmgeo;
