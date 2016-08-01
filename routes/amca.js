var express = require('express');
var routerAmca = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmca.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Cajennense",
        clade: "Ixodida",
        source: "GBIF USNPC",
    };
    res.render('Amca', renderObj);
});

// Grab data from document
routerAmca.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmca;
