var express = require('express');
var routerAmfi = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmfi.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Fimbriatum",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('amfi', renderObj);
});

// Grab data from document
routerAmfi.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmfi;
