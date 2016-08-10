var express = require('express');
var routerHYALOMMA_IMPELTATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_IMPELTATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma impeltatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_IMPELTATUM/HYALOMMA IMPELTATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_IMPELTATUM/future-maps/future.pdf",
        url: "/HYALOMMA_IMPELTATUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_IMPELTATUM/HYALOMMA IMPELTATUM pearldata.csv"
    };
    res.render('HYALOMMA_IMPELTATUM', renderObj);
});

// Grab data from document
routerHYALOMMA_IMPELTATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_IMPELTATUM;
