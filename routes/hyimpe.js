var express = require('express');
var routerHyimpe = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');
var fs = require('fs');
var parse = require('csv-parse');

routerHyimpe.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma impeltatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/hyimpe/HYALOMMA IMPELTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/hyimpe/future-maps/future.pdf",
        url: "/hyimpe",
        urlCSV: "pdf/web/species-pages/hyimpe/HYALOMMA IMPELTATUM pearldata.csv"
    };
    res.render('hyimpe', renderObj);
});

// Grab data from document
routerHyimpe.post('/', function(req, res) {

    res.end();
});

module.exports = routerHyimpe;
