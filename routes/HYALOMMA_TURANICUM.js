var express = require('express');
var routerHYALOMMA_TURANICUM = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_TURANICUM.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma turanicum",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_TURANICUM/HYALOMMA TURANICUM current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_TURANICUM/future-maps/future.pdf",
        url: "/HYALOMMA_TURANICUM",
        urlCSV: "pdf/web/species-pages/HYALOMMA_TURANICUM/HYALOMMA TURANICUM pearldata.csv"
    };
    res.render('HYALOMMA_TURANICUM', renderObj);
});

// Grab data from document
routerHYALOMMA_TURANICUM.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_TURANICUM;
