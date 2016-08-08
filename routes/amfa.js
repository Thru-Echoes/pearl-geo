var express = require('express');
var routerAmfa = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmfa.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Falsomarmoreum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('amfa', renderObj);
});

// Grab data from document
routerAmfa.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmfa;
