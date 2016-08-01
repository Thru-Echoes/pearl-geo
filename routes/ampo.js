var express = require('express');
var routerAmpo = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmpo.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Pomposum",
        clade: "Ixodida",
        source: "Cumming GBIF",
    };
    res.render('Ampo', renderObj);
});

// Grab data from document
routerAmpo.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmpo;
