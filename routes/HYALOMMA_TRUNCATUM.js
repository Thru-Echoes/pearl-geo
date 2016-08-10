var express = require('express');
var routerHYALOMMA_TRUNCATUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_TRUNCATUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma truncatum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_TRUNCATUM/HYALOMMA TRUNCATUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_TRUNCATUM/future-maps/future.pdf",
        url: "/HYALOMMA_TRUNCATUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_TRUNCATUM/HYALOMMA TRUNCATUM pearldata.csv"
    };
    res.render('HYALOMMA_TRUNCATUM', renderObj);
});

// Grab data from document
routerHYALOMMA_TRUNCATUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_TRUNCATUM;
