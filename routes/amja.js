var express = require('express');
var routerAmja = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAmja.get('/', function(req, res) {
    var renderObj = {
        title: "Amblyomma Javanense",
        clade: "Ixodida",
        source: "GBIF",
    };
    res.render('amja', renderObj);
});

// Grab data from document
routerAmja.post('/', function(req, res) {

    res.end();
});

module.exports = routerAmja;
