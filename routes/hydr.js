var express = require('express');
var routerHydr = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');
var fs = require('fs');
var parse = require('csv-parse');

routerHydr.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma dromedarii",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/hydr/HYALOMMA DROMEDARII current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/hydr/future-maps/future.pdf",
        url: "/hydr",
        urlCSV: "pdf/web/species-pages/hydr/HYALOMMA DROMEDARII pearldata.csv"
    };
    res.render('hydr', renderObj);
});

// Grab data from document
routerHydr.post('/', function(req, res) {

    res.end();
});

module.exports = routerHydr;
