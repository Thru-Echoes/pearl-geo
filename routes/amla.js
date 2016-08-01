var express = require('express');
var routerAmla = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmla.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Latum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('Amla', renderObj);
});

// Grab data from document
routerAmla.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmla;
