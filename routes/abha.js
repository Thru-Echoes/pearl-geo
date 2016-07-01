var express = require('express');
var routerAbha = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbha.get('/', function(req, res) {
    res.render('abha', {
        title: "Species: Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
    });
});

// Grab data from document
routerAbha.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbha;
