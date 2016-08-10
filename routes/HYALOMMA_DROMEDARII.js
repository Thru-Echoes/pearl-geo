var express = require('express');
var routerHYALOMMA_DROMEDARII = express.Router();
var bodyParser = require('body-parser');
var app = require('../app');

routerHYALOMMA_DROMEDARII.get('/', function(req, res) {

    var renderObj = {
        title: "Hyalomma dromedarii",
        clade: "Ixodida",
        source: "GBIF",
        currMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_DROMEDARII/HYALOMMA DROMEDARII current.pdf",
        futMap: "pdf/web/viewer.html?file=species-pages/HYALOMMA_DROMEDARII/future-maps/future.pdf",
        url: "/HYALOMMA_DROMEDARII",
        urlCSV: "pdf/web/species-pages/HYALOMMA_DROMEDARII/HYALOMMA DROMEDARII pearldata.csv"
    };
    res.render('HYALOMMA_DROMEDARII', renderObj);
});

// Grab data from document
routerHYALOMMA_DROMEDARII.post('/', function(req, res) {

    res.end();
});

module.exports = routerHYALOMMA_DROMEDARII;
