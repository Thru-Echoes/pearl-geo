var express = require('express');
var routerAmte = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmte.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Testudinarium",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('Amte', renderObj);
});

// Grab data from document
routerAmte.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmte;
