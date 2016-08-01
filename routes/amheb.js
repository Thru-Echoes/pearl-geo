var express = require('express');
var routerAmheb = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmheb.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Hebraeum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amheb', renderObj);
});

// Grab data from document
routerAmheb.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmheb;
