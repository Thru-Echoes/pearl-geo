var express = require('express');
var routerAmth = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmth.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Tholloni",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amth', renderObj);
});

// Grab data from document
routerAmth.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmth;
