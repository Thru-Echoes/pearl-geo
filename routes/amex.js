var express = require('express');
var routerAmex = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmex.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Exornatum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('amex', renderObj);
});

// Grab data from document
routerAmex.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmex;
