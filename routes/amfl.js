var express = require('express');
var routerAmfl = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmfl.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Flavomaculatum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('Amfl', renderObj);
});

// Grab data from document
routerAmfl.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmfl;
