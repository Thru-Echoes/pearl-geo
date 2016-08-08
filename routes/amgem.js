var express = require('express');
var routerAmgem = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmgem.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Gemma",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('amgem', renderObj);
});

// Grab data from document
routerAmgem.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmgem;
