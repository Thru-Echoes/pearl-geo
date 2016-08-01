var express = require('express');
var routerAmeb = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmeb.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Eberneum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('Ameb', renderObj);
});

// Grab data from document
routerAmeb.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmeb;
