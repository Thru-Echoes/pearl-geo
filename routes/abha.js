var express = require('express');
var routerAbha = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbha.get('/', function(req, res) {
    var renderObj = {
        title: "Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
    };
    res.render('abha', renderObj);
});

// Grab data from document
routerAbha.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbha;
