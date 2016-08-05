var express = require('express');
var routerAbha = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerAbha.get('/', function(req, res) {

    var renderObj = {
        title: "Abbreviata hastaspicula",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abha/ABBREVIATA HASTASPICULA current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abha/future-maps/ABBREVIATA HASTASPICULA future.pdf",
        crStatus: "CR",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/abha",
        urlCSV: "pdf/web/species-pages/abha/ABBREVIATA HASTASPICULA pearldata.csv"
    };
    res.render('abha', renderObj);
});

// Grab data from document
routerAbha.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbha;
