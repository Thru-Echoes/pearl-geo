var express = require('express');
var routerAmcu = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmcu.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Cuneatum",
        clade: "Ixodida",
        source: "Cumming",
    };
    res.render('amcu', renderObj);
});

// Grab data from document
routerAmcu.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmcu;
