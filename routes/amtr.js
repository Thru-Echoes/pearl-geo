var express = require('express');
var routerAmtr = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmtr.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Triguttatum",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('Amtr', renderObj);
});

// Grab data from document
routerAmtr.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmtr;
