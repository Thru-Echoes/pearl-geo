var express = require('express');
var routerAbba = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');
var fs = require('fs');
var parse = require('csv-parse');

routerAbba.get('/', function(req, res) {

    var renderObj = {
        title: "Abbreviata bancrofti",
        clade: "Nematoda",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/abba/ABBREVIATA BANCROFTI current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/abba/future-maps/ABBREVIATA BANCROFTI future.pdf",
        crStatus: "CR",
        tss: "0.71",
        auc: "0.90",
        dataQuality: "Fair",
        modelQuality: "Good",
        url: "/abba",
        urlCSV: "pdf/web/species-pages/abba/ABBREVIATA BANCROFTI pearldata.csv"
    };
    res.render('abba', renderObj);
});

// Grab data from document
routerAbba.post('/', function(req, res) {

    res.end();
});

module.exports = routerAbba;
