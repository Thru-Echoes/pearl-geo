var express = require('express');
var routerHYALOMMA_RUFIPES = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_RUFIPES.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma rufipes",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_RUFIPES/HYALOMMA RUFIPES current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_RUFIPES/future-maps/future.pdf",
        url: "/HYALOMMA_RUFIPES",
        urlCSV: "pdf/web/species-pages/HYALOMMA_RUFIPES/HYALOMMA RUFIPES pearldata.csv"
    };
    res.render('HYALOMMA_RUFIPES', renderObj);
});

// Grab data from document
routerHYALOMMA_RUFIPES.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_RUFIPES;
