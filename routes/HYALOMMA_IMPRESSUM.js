var express = require('express');
var routerHYALOMMA_IMPRESSUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_IMPRESSUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma impressum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_IMPRESSUM/HYALOMMA IMPRESSUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_IMPRESSUM/future-maps/future.pdf",
        url: "/HYALOMMA_IMPRESSUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_IMPRESSUM/HYALOMMA IMPRESSUM pearldata.csv"
    };
    res.render('HYALOMMA_IMPRESSUM', renderObj);
});

// Grab data from document
routerHYALOMMA_IMPRESSUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_IMPRESSUM;
