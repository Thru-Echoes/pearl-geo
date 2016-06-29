var express = require('express');
var routerAbba = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbba.get('/', function(req, res) {
    var renderObj = {
        title: "Abbreviata bancrofti",
        clade: "Nematoda",
        source: "GBIF",
    };
    res.render('abba', renderObj);
});

// Grab data from document
routerAbba.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbba;
