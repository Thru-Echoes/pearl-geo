var express = require('express');
var routerAmrh = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmrh.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Rhinocerotis",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Amrh', renderObj);
});

// Grab data from document
routerAmrh.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmrh;
